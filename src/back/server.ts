import express from 'express';
import dotenv from 'dotenv';
import questionRoutes from './src/routes/questionRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', questionRoutes);

app.listen(PORT , () =>{
    console.log('Server online on http://localhost:${PORT}')
});
