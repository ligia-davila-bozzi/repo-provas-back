import { Router } from 'express';
import * as subjectController from '../controllers/subjectController';
import * as testController from '../controllers/testController';
import * as professorController from '../controllers/professorController';

const router = Router();

router.get('/periods/subjects', subjectController.getCategories);
router.get('/periods/subjects/:id/tests', testController.getTestsBySubjectAndCategories);

router.get('/subjects/professors', professorController.getProfessorsBySubjects);

export default router;
