import { Router } from 'express';
import mainController from '../controllers/main-page.controller.js';
import detailController from '../controllers/detail-page.controller.js';

const router = Router();

router.get('/:id', detailController);
router.get('/', mainController);

export default router;
