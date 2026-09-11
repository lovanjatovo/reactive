import { Router } from 'express';
import { getQuestions , updateQuestion , deleteQuestion , getQuestion_ById} from '../controller/questionController';

const router = Router();

router.get('/questions', getQuestions);
router.get('/questions/:id' , getQuestion_ById);
router.put('/questions/:id', updateQuestion);
router.delete('/questions/:id', deleteQuestion);

export default router;