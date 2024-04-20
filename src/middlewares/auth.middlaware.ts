import { ReturnError } from '@exceptions/dtos/return-error.dto';
import { verifyToken } from '@utils/auth';
import { NextFunction, Request, Response } from 'express';

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const auhtorization = req.headers.authorization;

  await verifyToken(auhtorization)
    .then(() => {
      next();
    })
    .catch((error) => {
      new ReturnError(res, error);
    });
};
