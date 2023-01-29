import asyncHandler from 'express-async-handler';
import type { Request, Response } from 'express';

import { USER_INITIAL_DATA } from '../../constants/defaults';
import generateAuthToken from '../../utils/generateAuthToken';
import { prisma } from '../../lib/prisma';
import { sendWelcomeEmail } from '../../lib/email';

const googleAuth = asyncHandler(async (req: Request, res: Response) => {
  const { email, firstName, lastName, profilePic } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    const updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        email,
        firstName,
        lastName,
        fullName: firstName + ' ' + lastName,
        profilePic,
      },
    });
    const token = generateAuthToken(user.id);
    res.cookie('token', token, { httpOnly: true, sameSite: 'none', secure: true });
    res.status(200).json({ success: true, user: updatedUser, isNewUser: false });

    return;
  } else {
    //create user
    const user = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        fullName: firstName + ' ' + lastName,
        profilePic,
        age: USER_INITIAL_DATA.age,
        height: USER_INITIAL_DATA.height,
        weight: USER_INITIAL_DATA.weight,
        joined: new Date(),
      },
    });

    console.log('User created');

    // await sendWelcomeEmail(user.email, user.firstName);

    const token = generateAuthToken(user.id);
    res.cookie('token', token, { httpOnly: true, sameSite: 'none', secure: true });

    res.status(200).json({ success: true, user, isNewUser: true });
    return;
  }
});

export default googleAuth;
