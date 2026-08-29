import { Router } from 'express';
import { getQuestions } from '../controller/questionController';

const router = Router();

router.get('/questions', getQuestions);

export default router;