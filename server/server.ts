import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import authRoute from './routes/authRoute'

dotenv.config()

const app: Application = express();
app.use(cors())
app.use(express.json());

const mongoKey = `${process.env.MONGO_URI}`;

mongoose.connect(
    mongoKey,
    () => {
        console.log('connected to db!')
    }
);

app.use("/auth", authRoute)

app.get("/", (req: Request, res: Response) => {
   res.send('hello world')
})

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`Server running in PORT:${PORT}`)
})