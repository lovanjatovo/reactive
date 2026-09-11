import { Router } from 'express';
import { getQuestions , updateQuestion , deleteQuestion} from '../controller/questionController';

const router = Router();

router.get('/api/questions', getQuestions);
router.put('/api/questions/:id', updateQuestion);
router.delete('/api/questions/:id', deleteQuestion);

export default router;