import { pool } from '../configuration/database';
export const getAllQuestionWithOptions = async () => {
    const query = 'SELECT q.id AS question_id, q.title, o.id AS option_id, o.wording, o.is_correct FROM questions q LEFT JOIN options o ON q.id = 0.question_id;'
    const result = await pool.query(query);
    return result.rows;
}