import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';
import AppError from '../errors/AppError';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

interface RequestNew extends Request {
  user: { id: string };
}
export default function ensureAuthenticated(
  request: RequestNew,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError(
      'JWT token is missing',
      'O token foi perdido',
      'Por favor relogue no sistema e tente novamente',
      401,
    );
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded as TokenPayload;

    request.user = { id: sub };

    return next();
  } catch {
    throw new AppError(
      'Invalid JWT token',
      'Sem Token válido',
      'Por favor relogue no sistema e tente novamente',
      401,
    );
  }
}
