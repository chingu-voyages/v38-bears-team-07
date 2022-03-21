import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import process from 'process';
import cors from 'cors';
import authRoute from './routes/authRoute';
import errorHandler from './middleware/error';

dotenv.config();

const app: Application = express();
app.use(cors());
app.use(express.json());

mongoose.connect(`${process.env.MONGO_URI}`);

app.use('/auth', authRoute);
app.use(errorHandler);

app.get('/', (req: Request, res: Response) => {
    res.send('API is running');
});

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`Server running in PORT:${PORT}`);
});
