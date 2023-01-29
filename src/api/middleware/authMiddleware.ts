import type { NextFunction, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { verify } from 'jsonwebtoken';

const authMiddleware = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET not found.');
  }
  const token = req.cookies.token;
  if (!token) {
    res.status(401);

    throw new Error('Not Authorized.');
  }

  verify(token, process.env.JWT_SECRET);

  next();
  try {
  } catch (error) {
    console.log('middleware', error);
    res.status(401);
    throw new Error('Not Authorized.');
  }
});

export default authMiddleware;
