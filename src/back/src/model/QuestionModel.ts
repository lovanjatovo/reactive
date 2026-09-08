export interface Choice {
    id: number;
    content: string;
    question_id: number;
    wording: string;
    isCorrect?: boolean;
};

export interface Question {
    id: number;
    title: string;
    points: number;
    choices: Choice[];
}
