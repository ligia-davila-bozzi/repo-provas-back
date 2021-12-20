import { Router } from 'express';
import * as categoryController from '../controllers/categoryController';

const router = Router();

router.get('/categories', categoryController.getCategories);

export default router;
