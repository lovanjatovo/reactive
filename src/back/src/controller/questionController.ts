import {Request , Response} from 'express';
import { getAllQuestionWithOptions } from '../repository/quetionRepository';

export const getQuestions = async (req: Request,res: Response) => {
    try{
        const questions = await getAllQuestionWithOptions();
        res.status(200).json(questions);
    }catch(error){
        console.error('Error during fetching questions: ',error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};