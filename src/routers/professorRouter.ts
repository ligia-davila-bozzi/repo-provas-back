import { Router } from 'express';
import * as testController from '../controllers/testController';

const router = Router();

router.get('/professors/:id/tests', testController.getTestsByProfessorAndCategories);

export default router;
