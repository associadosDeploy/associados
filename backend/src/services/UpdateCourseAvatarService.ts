import path from 'path';

import { getRepository } from 'typeorm';

import fs from 'fs';
import Course from '../models/Course';

import uploadConfig from '../config/upload';
import AppError from '../errors/AppError';

interface Request {
  id: string;
  avatarFilename: string;
}

class UpdateCourseAvatarService {
  public async execute({ id, avatarFilename }: Request): Promise<Course> {
    const courseRepository = getRepository(Course);

    const course = await courseRepository.findOne(id);

    if (!course) {
      throw new AppError('Course not found', '', '', 401);
    }

    if (course.avatar) {
      const courseAvatarFilePath = path.join(
        uploadConfig.directory,
        course.avatar,
      );

      const userAvatarFileExists = await fs.promises.stat(courseAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(courseAvatarFilePath);
      }
    }

    course.avatar = avatarFilename;

    await courseRepository.save(course);

    return course;
  }
}

export default UpdateCourseAvatarService;
