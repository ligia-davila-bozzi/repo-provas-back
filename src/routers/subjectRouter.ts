import { Router } from 'express';
import * as subjectController from '../controllers/subjectController';
import * as testController from '../controllers/testController';

const router = Router();

router.get('/periods/subjects', subjectController.getCategories);
router.get('/periods/subjects/:id/tests', testController.getTestsBySubjectAndCategories);

export default router;
