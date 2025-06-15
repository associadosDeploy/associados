import multer from 'multer';
import AWS from 'aws-sdk';
import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import fs from 'fs';
import path from 'path';
import Courses from '../models/Course';
import Associates from '../models/Associates';

import AppError from '../errors/AppError';
import uploadConfig from '../config/upload';

const freeRouter = Router();

const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

// Cria um middleware de upload usando o storage do seu multer config
const upload = multer(uploadConfig);

freeRouter.get('/healthcheck', async (request: Request, response: Response) => {
  return response.status(200).json({ ok: true });
});

freeRouter.get('/associate', async (request: Request, response: Response) => {
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

freeRouter.get('/course', async (request: Request, response: Response) => {
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

freeRouter.get('/course/:id', async (request: Request, response: Response) => {
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

freeRouter.get(
  '/associate/:id',
  async (request: Request, response: Response) => {
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
  },
);

freeRouter.post(
  '/associate',
  upload.array('documents'),
  async (request: Request, response: Response) => {
    try {
      // 1. Extrai todos os campos do formulário
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

      // 2. Gera a data de filiação (affiliation) no formato DD/MM/YYYY
      const now = new Date();
      const day = now.getDate().toString().padStart(2, '0');
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const year = now.getFullYear();
      const affiliation = `${day}/${month}/${year}`;

      const associateRepository = getRepository(Associates);

      if (!oab) {
        oab = '';
      }

      /**
       * 3. Cria a instância inicial do Associate (sem documentLinks)
       *    Supondo que a entidade Associates tenha uma coluna `documentLinks: string[]`
       */
      const associate = associateRepository.create({
        oab,
        state,
        city,
        cep,
        cpf,
        affiliation,
        birthDate: new Date(birthDate),
        name,
        rg,
        rg_uf,
        emissor,
        shipping_date: new Date(shipping_date),
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
        documentLinks: [], // inicializado vazio
      });

      // 4. Salva o associate para obter o ID
      await associateRepository.save(associate);

      // 5. Recupera os arquivos que foram armazenados em disco
      const files = request.files as Express.Multer.File[];
      const documentLinks: string[] = [];

      if (files && files.length > 0) {
        // Cria um array de Promises para fazer o upload de cada arquivo
        const uploadPromises = files.map(file => {
          const tempFilePath = file.path;

          const keyAws = `associates/${associate.id}/${Date.now()}_${file.originalname}`;
          const fileStream = fs.createReadStream(tempFilePath);

          const params: AWS.S3.PutObjectRequest = {
            Bucket: process.env.AWS_BUCKET_NAME!,
            Key: keyAws,
            Body: fileStream,
            ContentType: file.mimetype,
            ACL: 'public-read',
          };

          // Retorna a Promise de upload + remoção do arquivo temporário
          return s3
            .upload(params)
            .promise()
            .then(uploadResult => {
              // Guarda a URL retornada pelo S3
              documentLinks.push(uploadResult.Location);

              // Remove o arquivo temporário (não bloqueante)
              fs.unlink(tempFilePath, err => {
                if (err) {
                  console.warn(
                    `Falha ao excluir arquivo temporário ${tempFilePath}:`,
                    err,
                  );
                }
              });
            });
        });

        // Aguarda todas as Promises de upload
        await Promise.all(uploadPromises);
      }

      // 6. Atualiza o associate com os URLs dos documentos no S3
      associate.documentLinks = documentLinks;
      await associateRepository.save(associate);

      return response.status(201).json(associate);
    } catch (error: any) {
      console.error('Erro na rota /free/associate:', error);
      return response.status(500).json({
        message: 'Erro ao criar associate e fazer upload dos documentos',
        error: error.message,
      });
    }
  },
);

export default freeRouter;
