import express from 'express';
import dotenv from 'dotenv';
import { Request , Response } from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/',(req: Request , res: Response) => {
    res.send('Server in process');
});

app.listen(PORT , () =>{
    console.log('Server online on http://localhost:3000')
});