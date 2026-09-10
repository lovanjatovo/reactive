import { Router } from 'express';
import { getQuestions , updateQuestion , deleteQuestion} from '../controller/questionController';

const router = Router();

router.get('/questions', getQuestions);
router.put('/questions/:id', updateQuestion);
router.delete('/questions/:id', deleteQuestion);

export default router;