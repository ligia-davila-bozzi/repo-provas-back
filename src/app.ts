import './setup';

import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import connectDatabase from './database';

import categoryRouter from './routers/categoryRouter';

const app = express();
app.use(cors());
app.use(express.json());

app.use(categoryRouter);

export async function init() {
  await connectDatabase();
}

export default app;
