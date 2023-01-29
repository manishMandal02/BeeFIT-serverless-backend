import asyncHandler from 'express-async-handler';
import type { Request, Response } from 'express';
import { prisma } from '../../lib/prisma';

const updateGoal = asyncHandler(async (req: Request, res: Response) => {
  const { goalId, measurement } = req.body;

  await prisma.goal.update({
    where: {
      id: goalId,
    },
    data: {
      tacking: {
        push: {
          date: new Date(),
          measurement,
        },
      },
    },
  });

  res.status(200).json({ success: true, message: 'Goal updated successfully' });
});

export default updateGoal;
