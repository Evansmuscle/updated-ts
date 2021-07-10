import express from 'express';
import cookieSession from 'cookie-session';

import { loginRouter } from './routes/loginRoutes';

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieSession({ keys: ['qekşhjqekşhqejh'] }));

app.use(loginRouter);

export default app;
