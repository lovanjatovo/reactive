import express from 'express';
import dotenv from 'dotenv';
import { Request , Response } from 'express';
import { getQuestions , update_Question , delete_Question} from './src/controller/questionController';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/',(req: Request , res: Response) => {
    res.send('Server in process');
});

app.get('/api/questions' , getQuestions);

app.put('/api/questions/{id}' , update_Question);

app.delete('/api/questions/{id}' , delete_Question);

app.listen(PORT , () =>{
    console.log('Server online on http://localhost:3000')
});
