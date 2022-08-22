import logger from 'morgan';
import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';
var app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/v1', indexRouter);

export default app;
