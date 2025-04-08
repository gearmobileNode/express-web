import { Router } from 'express';
import {
  mainController,
  detailController,
} from '../controllers/todos-controller.js';

const router = Router();

router.get('/:id', detailController);
router.get('/', mainController);

export default router;
