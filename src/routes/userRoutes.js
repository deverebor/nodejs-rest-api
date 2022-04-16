import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, userController.index);
router.get('/show/:id', userController.show);
router.post('/create', userController.create);
router.put('/update/:id', userController.update);
router.delete('/destroy/:id', userController.destroy);

export default router;
