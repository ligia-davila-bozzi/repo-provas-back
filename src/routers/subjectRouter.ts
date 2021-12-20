import { Router } from 'express';
import * as subjectController from '../controllers/subjectController';

const router = Router();

router.get('/periods/subjects', subjectController.getCategories);

export default router;
