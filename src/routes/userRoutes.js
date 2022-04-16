import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/create', userController.create);
router.put('/update', loginRequired, userController.update);
router.delete('/destroy', loginRequired, userController.destroy);

export default router;
