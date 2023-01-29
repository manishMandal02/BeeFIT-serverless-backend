import type { Request, Response, NextFunction } from 'express';

const notFoundError = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not Found: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err: Error, req: Request, res: Response) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  console.log(err.message);
  res.json({
    success: false,
    message: err.message,
  });
};

export { notFoundError, errorHandler };
