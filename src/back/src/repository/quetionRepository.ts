import { pool } from '../configuration/database';
export const getAllQuestionWithOptions = async () => {
    const query = 'SELECT q.id AS question_id, q.title, o.id AS option_id, o.wording, o.is_correct FROM questions q LEFT JOIN options o ON q.id = 0.question_id;'
    const result = await pool.query(query);
    return result.rows;
}

export const getQuestionById = async () => {
    const query = 'SELECT q.id , q.title , q.description WHERE q.id = $1;'
    const result = await pool.query(query);
    return result.rows;
}

export const updateQuestion = async () =>{
    const query = 'UPDATE TABLE questions WHERE id = $1;'
    const result = await pool.query(query);
    return result.rows;
}

export const deleteQuestion = async () => {
    const query = 'DELETE FROM TABLE questions WHERE id = $1;'
    const result = await pool.query(query);
    return result.rows;
}