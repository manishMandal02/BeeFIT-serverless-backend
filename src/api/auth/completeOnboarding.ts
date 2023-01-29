import asyncHandler from 'express-async-handler';
import type { Request, Response } from 'express';
import { prisma } from '../../lib/prisma';

const completeOnboarding = asyncHandler(async (req: Request, res: Response) => {
  const { userId, age, height, weight } = req.body;

  const goals = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      age,
      weight,
      height,
    },
  });

  res.status(200).json({ success: true, message: 'Onboarding completed successfully' });
});

export default completeOnboarding;
