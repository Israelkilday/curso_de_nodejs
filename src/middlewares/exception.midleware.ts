import { ReturnError } from '@exceptions/dtos/return-error.dto';
import { NextFunction, Response, Request } from 'express';

export const exceptionHandleMidleware = (
  error: Error,
  _: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (res.headersSent) {
    return next(error);
  }
  new ReturnError(res, error);
};
