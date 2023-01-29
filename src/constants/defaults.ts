import { User } from '@prisma/client';
import { pid } from 'process';

const APP_NAME = 'FarmFresh';

const OTP_EXPIRE_IN = 5 * 60;

const USER_INITIAL_DATA: Pick<User, 'age' | 'height' | 'weight'> = {
  age: 23,
  height: 178,
  weight: 73,
};

const ALLOWED_ORIGINS = ['http://localhost:300'];

export { APP_NAME, OTP_EXPIRE_IN, ALLOWED_ORIGINS, USER_INITIAL_DATA };
