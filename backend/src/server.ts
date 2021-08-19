/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import cors from 'cors';
import routes from './routes';
import uploadConfig from './config/upload';
import AppError from './errors/AppError';
import './database';

require('dotenv/config');

require('dotenv/config');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use('/files/csv', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
      title: err.title,
      description: err.description,
    });
  }

  console.log(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('Server Started on Port 3333');
});
