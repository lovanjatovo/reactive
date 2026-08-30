import {Request , Response} from 'express';
import { getAllQuestionWithOptions , getTheQuestionById } from '../repository/quetionRepository';

export const getQuestions = async (req: Request,res: Response) => {
    try{
        const questions = await getAllQuestionWithOptions();
        res.status(200).json(questions);
    }catch(error){
        console.error('Error during fetching questions: ',error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

export const getQuestionById (req: Request,res: Response) => {
    try{
        const question = await getTheQuestionById();
        res.status(200).json(question);
    }catch(error){
        console.error('Error during fetching the question you wanted to find: ' , error);
        res.status(500).json({message: 'Internal Server Error'});
    }
}