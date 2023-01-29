import asyncHandler from 'express-async-handler';
import type { Request, Response } from 'express';
import { prisma } from '../../lib/prisma';

const getUserGoals = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.params.userId;

  const goals = await prisma.goal.findMany({
    where: {
      userId,
    },
  });

  if (goals.length < 1) {
    res.status(200).json({ success: false, message: 'No goals found' });
    return;
  }

  res.status(200).json({ success: true, goals });
});

export default getUserGoals;
