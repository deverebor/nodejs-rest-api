import { Router } from 'express';
import tokenController from '../controllers/TokenController';

const router = new Router();

router.post('/', tokenController.createToken);

export default router;
