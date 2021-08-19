import path from 'path';

import { getRepository } from 'typeorm';

import fs from 'fs';
import Associate from '../models/Associates';

import uploadConfig from '../config/upload';
import AppError from '../errors/AppError';

interface Request {
  id: string;
  avatarFilename: string;
}

class UpdateCourseAvatarService {
  public async execute({ id, avatarFilename }: Request): Promise<Associate> {
    const associateRepository = getRepository(Associate);

    const associate = await associateRepository.findOne(id);

    if (!associate) {
      throw new AppError('Associate not found.');
    }

    if (associate.avatar) {
      const userAvatarFilePath = path.join(
        uploadConfig.directory,
        associate.avatar,
      );

      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    associate.avatar = avatarFilename;

    await associateRepository.save(associate);

    return associate;
  }
}

export default UpdateCourseAvatarService;
