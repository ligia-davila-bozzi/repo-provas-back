import { Request, Response } from 'express';
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

export {
    getTestsBySubjectAndCategories,
    getTestsByProfessorAndCategories,
};
