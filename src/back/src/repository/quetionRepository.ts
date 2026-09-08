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