import { Router,Request,Response } from 'express';
import { getRepository } from 'typeorm';

import Courses from '../models/Course';
import Associates from '../models/Associates';

import AppError from '../errors/AppError';

const freeRouter = Router();

freeRouter.get('/healthcheck', async (request:Request, response:Response) => {
  return response.status(200).json({ ok: true });
});

freeRouter.get('/associate', async (request:Request, response:Response) => {
  const { name } = request.query;
  const associatesRepository = getRepository(Associates);

  let associates = [];

  if (name) {
    associates = await associatesRepository.find({
      where: { valid: 1, visible: true, name },
    });
  } else {
    associates = await associatesRepository.find({
      where: { valid: 1, visible: true },
    });
  }

  const associateWithUrlAvatar = await Promise.all(
    associates.map(async associate => {
      return {
        ...associate,

        avatar: associate.avatar
          ? `${process.env.APP_URL}/files/${associate.avatar}`
          : null,
      };
    }),
  );

  return response.json(associateWithUrlAvatar);
});

freeRouter.get('/course', async (request:Request, response:Response) => {
  const coursesRepository = getRepository(Courses);

  const courses = await coursesRepository.find();

  const courseWithUrlAvatar = await Promise.all(
    courses.map(async course => {
      return {
        ...course,

        avatar: course.avatar
          ? `${process.env.APP_URL}/files/${course.avatar}`
          : null,
      };
    }),
  );

  return response.json(courseWithUrlAvatar);
});

freeRouter.get('/course/:id', async (request:Request, response:Response) => {
  const { id } = request.params;

  if (!id) {
    throw new AppError('Need id to continue');
  }

  const coursesRepository = getRepository(Courses);

  const checkCoursesExists = await coursesRepository.findOne({ where: { id } });

  if (!checkCoursesExists) {
    throw new AppError('Course not found');
  }

  response.json({
    ...checkCoursesExists,
    avatar: checkCoursesExists.avatar
      ? `${process.env.APP_URL}/files/${checkCoursesExists.avatar}`
      : null,
  });
});

freeRouter.get('/associate/:id', async (request:Request, response:Response) => {
  const { id } = request.params;
  const associateRepository = getRepository(Associates);
  if (!id) {
    throw new AppError('Need id to continue');
  }

  const checkAssociateExists = await associateRepository.findOne({
    where: { id },
  });

  if (!checkAssociateExists) {
    throw new AppError('Course not found');
  }

  response.json({
    ...checkAssociateExists,
    avatar: checkAssociateExists.avatar
      ? `${process.env.APP_URL}/files/${checkAssociateExists.avatar}`
      : null,
  });
});

freeRouter.post('/associate', async (request:Request, response:Response) => {
  let { oab } = request.body;
  const {
    state,
    city,
    cep,
    cpf,
    birthDate,
    name,
    rg,
    rg_uf,
    emissor,
    shipping_date,
    naturalness,
    naturalness_uf,
    address,
    email_data,
    profession,
    education,
    specialization,
    phone,
    email_profession,
    acting,
  } = request.body;

  const date = new Date();
  const affiliation = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

  const associateRepository = getRepository(Associates);

  if (!oab) {
    oab = '';
  }

  const associate = associateRepository.create({
    oab,
    state,
    city,
    cep,
    cpf,
    affiliation,
    birthDate,
    name,
    rg,
    rg_uf,
    emissor,
    shipping_date,
    naturalness,
    naturalness_uf,
    address,
    email_data,
    profession,
    education,
    specialization,
    phone,
    email_profession,
    acting,
    valid: 0,
  });

  await associateRepository.save(associate);

  return response.json(associate);
});

export default freeRouter;
