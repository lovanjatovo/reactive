import {Request , Response} from 'express';
import { getAllQuestionWithOptions , getQuestionById , update_Question , delete_Question} from '../repository/quetionRepository';

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

export const updateQuestion = async (req: Request , res: Response) => {
    try{
        const id = Number(req.params.id);
        const { title } = req.body;

        const updated = await update_Question(id, title);
        res.status(200).json(updated);
    }catch(error){
        console.error('Error during updating question:', error);
        res.status(500).json({message:'Internal Server Error'})
    }
};

export const deleteQuestion = async (req: Request , res: Response) =>{
    try{
        const id = Number(req.params.id);

        await delete_Question(id);
        res.status(204).send();
    }catch(error){
        console.error('Error during deleting question:',error);
        res.status(500).json({message: 'Internal Server Error'})
    }
};