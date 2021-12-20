import { Request, Response } from 'express';
import { TestEntity } from '../entities/TestEntity';
import { testBodySchema } from '../schemas/testSchema';
import * as testService from '../services/testService';

async function getTestsBySubjectAndCategories(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const result = await testService.getTestsBySubjectAndCategories(Number(id));
        res.send(result);
    } catch (err) {
        res.sendStatus(500);
    }
}

async function getTestsByProfessorAndCategories(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const result = await testService.getTestsByProfessorAndCategories(Number(id));
        res.send(result);
    } catch (err) {
        res.sendStatus(500);
    }
}

async function RegisterTest(req: Request, res: Response) {
    const testBody: TestEntity = req.body;
    const invalidBody = testBodySchema.validate(testBody).error;

    if (invalidBody) {
        return res.sendStatus(400);
    }

    try {
        await testService.postTest(testBody);
        res.sendStatus(201);
    } catch (err) {
        res.sendStatus(500);
    }
}

export {
    getTestsBySubjectAndCategories,
    getTestsByProfessorAndCategories,
    RegisterTest,
};
