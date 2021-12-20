import './setup';

import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import connectDatabase from './database';

import categoryRouter from './routers/categoryRouter';
import subjectRouter from './routers/subjectRouter';
import professorRouter from './routers/professorRouter';

const app = express();
app.use(cors());
app.use(express.json());

app.use(categoryRouter);
app.use(subjectRouter);
app.use(professorRouter);

export async function init() {
    await connectDatabase();
}

export default app;
