import express from 'express';
import authRouter from './auth';
import postRouter from './post';
import userRouter from './user';
import commentRouter from './comment';

const APIRouter = express.Router();

APIRouter.use('/auth', authRouter);
APIRouter.use('/post', postRouter);
APIRouter.use('/user', userRouter);
APIRouter.use('/comment', commentRouter);

export default APIRouter;
