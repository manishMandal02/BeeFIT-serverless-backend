import serverless from 'serverless-http';
import express, { Application, Router } from 'express';
import cookieParser from 'cookie-parser';
import { errorHandler, notFoundError } from '../middleware/errorMiddleware';
import { ALLOWED_ORIGINS } from '../../constants/defaults';
import getUserGoals from './getUserGoals';

const app: Application = express();

const authRouter = Router();

if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_PRODUCT_ID) {
  throw new Error('ENV variables not configured');
}

app.use((req, res, next) => {
  const origin = req.headers.origin!;
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  // res.header('Access-Control-Allow-Origin', 'https://app.inoffice.today');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(express.json());

app.use(cookieParser());

// base goal route
app.use('/api/goal', authRouter);

//get all goals for a user
authRouter.get('/:userId', getUserGoals);

//update goal
authRouter.put('/', getUserGoals);

app.use(notFoundError);
app.use(errorHandler);

const handler = serverless(app);

export { handler };
