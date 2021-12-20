import { Router } from 'express';
import * as testController from '../controllers/testController';

const router = Router();

router.post('/test-register', testController.RegisterTest);

export default router;
