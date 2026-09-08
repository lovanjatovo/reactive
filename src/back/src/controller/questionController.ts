import {Request , Response} from 'express';
import { getAllQuestionWithOptions , getQuestionById , updateQuestion , deleteQuestion} from '../repository/quetionRepository';
import { pool } from '../configuration/database';

export const getQuestions = async (req: Request,res: Response) => {
    try{
        const questions = await getAllQuestionWithOptions();
        res.status(200).json(questions);
    }catch(error){
        console.error('Error during fetching questions: ',error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

export const getQuestion_ById = async (req: Request,res: Response) => {
    try{
        const question = await getQuestionById();
        res.status(200).json(question);
    }catch(error){
        console.error('Error during fetching the question you wanted to find: ' , error);
        res.status(500).json({message: 'Internal Server Error'});
    }
}

export const update_Question = async (id: number , title: string) =>{
    const query = 'UPDATE questions SET title = $1 WHERE id = $2 RETURNING *;';
    const result = await pool.query(query,[title,id]);
    return result.rows[0];
}

export const delete_Question = async (id: number) => {
    const query = 'DELETE FROM questions WHERE id = $1;';
    const result = await pool.query(query,[id])
    return result.rows;
}