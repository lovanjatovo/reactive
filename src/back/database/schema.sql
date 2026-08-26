CREATE TABLE questions (
    id SERIAL PRIMARY KEY ,
    title TEXT NOT NULL
);

CREATE TABLE options (
    id SERIAL PRIMARY KEY ,
    question_id INT REFERENCES questions(id) ,
    wording TEXT NOT NULL ,
    is_correct BOOLEAN NOT NULL
);