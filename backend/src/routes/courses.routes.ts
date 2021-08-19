import { Router } from 'express';
import { getRepository } from 'typeorm';

import multer from 'multer';
import uploadConfig from '../config/upload';
import Courses from '../models/Course';

import AppError from '../errors/AppError';

import UpdateCourseAvatarService from '../services/UpdateCourseAvatarService';

const coursesRouter = Router();
const upload = multer(uploadConfig);

coursesRouter.get('/', async (request, response) => {
  const coursesRepository = getRepository(Courses);

  const courses = await coursesRepository.find();

  const courseWithUrlAvatar = await Promise.all(
    courses.map(async course => {
      return {
        ...course,

        urlAvatar: course.avatar
          ? `${process.env.APP_URL}/files/${course.avatar}`
          : null,
      };
    }),
  );

  return response.json(courseWithUrlAvatar);
});

coursesRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const coursesRepository = getRepository(Courses);

  const checkCoursesExists = await coursesRepository.findOne({ where: id });

  if (!checkCoursesExists) {
    throw new AppError('Course not found');
  }

  response.json(checkCoursesExists);
});

coursesRouter.get('/find/:id', async (request, response) => {
  const { id } = request.params;
  const coursesRepository = getRepository(Courses);

  const course = await coursesRepository.findOne({
    where: { id },
  });

  response.json({
    ...course,
    avatar: course?.avatar
      ? `${process.env.APP_URL}/files/${course.avatar}`
      : null,
  });
});

coursesRouter.post('/', upload.single('avatar'), async (request, response) => {
  const { link, title, description } = request.body;
  const avatar = request.file.filename;
  const coursesRepository = getRepository(Courses);

  const courses = coursesRepository.create({
    link,
    title,
    description,
    avatar,
    user_id: request.user.id,
  });

  await coursesRepository.save(courses);

  return response.json(courses);
});

coursesRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { link, title, description } = request.body;

  const coursesRepository = getRepository(Courses);

  const checkCourseExists = await coursesRepository.findOne({
    where: { id },
  });

  if (!checkCourseExists) {
    throw new AppError('Associate not found');
  }

  const courses = coursesRepository.save({
    id,
    link,
    title,
    description,
  });

  return response.json(courses);
});

coursesRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const coursesRepository = getRepository(Courses);

  const course = await coursesRepository.findOne({
    where: { id },
  });

  if (!course) {
    throw new AppError('Course not found.');
  }

  await coursesRepository.remove(course);

  return response.status(204).send();
});
coursesRouter.patch(
  '/avatar',
  upload.single('avatar'),
  async (request, response) => {
    const { id } = request.body;
    const updateCourseAvatar = new UpdateCourseAvatarService();

    const course = await updateCourseAvatar.execute({
      id,
      avatarFilename: request.file.filename,
    });

    return response.json(course);
  },
);

export default coursesRouter;
