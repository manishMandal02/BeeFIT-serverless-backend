import { sign } from 'jsonwebtoken';

const generateAuthToken = (id: string) => {
  if (!process.env.JWT_SECRET) {
    throw new Error('env JWT_SECRET not found.');
  }

  const token = sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  return token;
};

export default generateAuthToken;
