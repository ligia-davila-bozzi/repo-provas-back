import { Request, Response } from 'express';
import * as professorService from '../services/professorService';

async function getProfessorsBySubjects(req: Request, res: Response) {
    try {
        const result = await professorService.getProfessorsBySubjects();
        res.send(result);
    } catch (err) {
        res.sendStatus(500);
    }
}

async function getProfessors(req: Request, res: Response) {
    try {
        const result = await professorService.getProfessors();
        res.send(result);
    } catch (err) {
        res.sendStatus(500);
    }
}

export {
    getProfessorsBySubjects,
    getProfessors,
};
