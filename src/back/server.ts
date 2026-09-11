import express from 'express';
import dotenv from 'dotenv';
import { getQuestions , getQuestion_ById , updateQuestion , deleteQuestion } from './src/controller/questionController';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/questions', getQuestions);
app.use('/questions/:id' , getQuestion_ById);

app.listen(PORT , () =>{
    console.log('Server online on http://localhost:3000');
});
