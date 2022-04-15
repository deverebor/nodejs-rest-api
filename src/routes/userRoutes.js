import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.get('/', userController.index);
router.get('/show/:id', userController.show);
router.post('/create', userController.create);
router.put('/update/:id', userController.update);
router.delete('/destroy/:id', userController.destroy);

export default router;
