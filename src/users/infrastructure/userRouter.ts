import express from 'express';
import { createUserController } from './controllers/createUserController';
import { getAllUserController } from './controllers/getAllUserController';
import { getByIdUserController } from './controllers/getByIdUserController';

const router = express.Router();

router.post('/users', createUserController);
router.get('/users', getAllUserController);
router.get('/users/:id', getByIdUserController);

export default router;
