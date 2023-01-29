import asyncHandler from 'express-async-handler';
import type { Request, Response } from 'express';

const logout = asyncHandler(async (req: Request, res: Response) => {
  res.clearCookie('token');
  res.send({ success: true, message: 'User logged out.' });
});

export default logout;
