import express from 'express';
import dotenv from 'dotenv';
import { Request , Response } from 'express';
import { getQuestions , updateQuestion , deleteQuestion} from './src/controller/questionController';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/',(req: Request , res: Response) => {
    res.send('Server in process');
});

app.get('/questions' , getQuestions);
app.put('/questions/{id}', updateQuestion);
app.delete('/questions/{id}', deleteQuestion);

app.listen(PORT , () =>{
    console.log('Server online on http://localhost:3000')
});
