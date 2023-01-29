import serverless from 'serverless-http';
import express, { Application, Router } from 'express';
import cookieParser from 'cookie-parser';
import { errorHandler, notFoundError } from '../middleware/errorMiddleware';
import logout from './logout';
import { ALLOWED_ORIGINS } from '../../constants/defaults';
import googleAuth from './google';

const app: Application = express();

const authRouter = Router();

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

//
app.use(cookieParser());

// base auth route
app.use('/api/auth', authRouter);

//logout
authRouter.get('/logout', logout);
// google auth
authRouter.post('/google', googleAuth);

// error handler middleware
app.use(notFoundError);
app.use(errorHandler);

const handler = serverless(app);

export { handler };
