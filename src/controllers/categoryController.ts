import { Request, Response } from 'express';
import * as categoryService from '../services/categoryService';

async function getCategories(req: Request, res: Response) {
    try {
        const categories = await categoryService.getCategories();
        res.send(categories);
    } catch (err) {
        res.sendStatus(500);
    }
}

export {
    getCategories,
};
