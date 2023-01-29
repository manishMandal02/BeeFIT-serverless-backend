import asyncHandler from 'express-async-handler';
import type { Request, Response } from 'express';
import { prisma } from '../../lib/prisma';
import { Habits } from '@prisma/client';

const createGoal = asyncHandler(async (req: Request, res: Response) => {
  const { userId, habit, isInfinite } = req.body;

  const goals = await prisma.goal.create({
    data: {
      label: '',
      habit: habit,
      isInfinite,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  res.status(200).json({ success: true, goals });
});

export default createGoal;
