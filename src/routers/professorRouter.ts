import { Router } from 'express';
import * as testController from '../controllers/testController';
import * as professorController from '../controllers/professorController';

const router = Router();

router.get('/professors/:id/tests', testController.getTestsByProfessorAndCategories);
router.get('/professors', professorController.getProfessors);

export default router;
