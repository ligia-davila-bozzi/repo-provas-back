import { Request, Response } from 'express';
import * as subjectService from '../services/subjectService';

async function getCategories(req: Request, res: Response) {
    try {
        const subjectsbyPeriod = await subjectService.getSubjectsByPeriod();
        res.send(subjectsbyPeriod);
    } catch (err) {
        res.sendStatus(500);
    }
}

export {
    getCategories,
};
