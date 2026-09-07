import {Request , Response} from 'express';
import { getAllQuestionWithOptions , getQuestionById , updateQuestion , deleteQuestion} from '../repository/quetionRepository';

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

export const update_Question = async (req: Request , res: Response) =>{
    try{
        const updates = await updateQuestion();
        res.status(201).json(updates); 
    }catch(error){
        console.error('Error during updating your informations');
        res.status(500).json({message: 'Internal Server Error'});
    }
}

export const delete_Question = async (req: Request , res: Response) => {
    try{
        const delession = await deleteQuestion();
        res.status(204).json(delession);
    }catch(error){
        console.error('Error during deleting question');
        res.status(500).json({message: 'Internal Server Error'});
    }
}