import { Router, Request } from 'express';
import { getRepository } from 'typeorm';

import multer from 'multer';
import uploadConfig from '../config/upload';

import Associate from '../models/Associates';

import UpdateAssociateAvatarService from '../services/UpdateAssociateAvatarService';

import AppError from '../errors/AppError';

interface RequestWithUser extends Request {
  user?: {
    id: string;
  };
}

const associatesRouter = Router();
const upload = multer(uploadConfig);

associatesRouter.get('/', async (request, response) => {
  const associateRepository = getRepository(Associate);

  const associates = await associateRepository.find();

  response.json(associates);
});

associatesRouter.get('/valid', async (request, response) => {
  const associateRepository = getRepository(Associate);

  const associates = await associateRepository.find({ where: { valid: 0 } });

  response.json(associates);
});

associatesRouter.get('/filter', async (request, response) => {
  const { visible, valid } = request.query;
  const associateRepository = getRepository(Associate);
  const newVisible = Boolean(Number(visible));

  const associates = await associateRepository.find({
    where: { visible: newVisible, valid },
  });

  response.json(associates);
});

associatesRouter.get('/find/:id', async (request, response) => {
  const { id } = request.params;
  const associateRepository = getRepository(Associate);

  const associate = await associateRepository.findOne({
    where: { id },
  });

  response.json({
    ...associate,
    avatar: associate?.avatar
      ? `${process.env.APP_URL}/files/${associate.avatar}`
      : null,
  });
});

associatesRouter.put(
  '/approve/:id',
  async (request: RequestWithUser, response) => {
    const { id } = request.params;
    const { valid } = request.body;
    const associateRepository = getRepository(Associate);

    if (!request.user) {
      throw new AppError('User not found');
    }

    const checkAssociateExists = await associateRepository.findOne({
      where: { id },
    });

    if (!checkAssociateExists) {
      throw new AppError('Associate not found');
    }

    const associate = {
      ...checkAssociateExists,
      valid,
      user_id: request.user.id,
    };

    await associateRepository.save(associate);

    return response.json(associate);
  },
);

associatesRouter.put('/visible/:id', async (request, response) => {
  const { id } = request.params;
  const { visible } = request.body;

  const associateRepository = getRepository(Associate);

  const checkAssociateExists = await associateRepository.findOne({
    where: { id },
  });

  if (!checkAssociateExists) {
    throw new AppError('Associate not found');
  }

  const associate = {
    ...checkAssociateExists,
    visible,
  };

  await associateRepository.save(associate);

  return response.json(associate);
});

associatesRouter.put('/:id', async (request, response) => {
  const { id } = request.params;

  const {
    oab,
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
    valid,
    affiliation,
  } = request.body;

  const associateRepository = getRepository(Associate);

  const checkAssociateExists = await associateRepository.findOne({
    where: { id },
  });

  if (!checkAssociateExists) {
    throw new AppError('Associate not found');
  }

  const associate = await associateRepository.save({
    id,
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
    valid,
  });

  return response.json(associate);
});

associatesRouter.patch(
  '/avatar',
  upload.single('avatar'),
  async (request, response) => {
    const { id } = request.body;
    const updateCourseAvatar = new UpdateAssociateAvatarService();

    const course = await updateCourseAvatar.execute({
      id,
      avatarFilename: request.file.filename,
    });

    return response.json(course);
  },
);

export default associatesRouter;
