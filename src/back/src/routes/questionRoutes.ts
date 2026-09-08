import { Router } from 'express';
import { getQuestions , update_Question , delete_Question} from '../controller/questionController';

const router = Router();

router.get('/questions', getQuestions);
router.put('/questions/{id}', update_Question );
router.delete('questions/{id}', delete_Question);

export default router;