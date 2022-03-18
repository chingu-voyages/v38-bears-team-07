import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
res.send('login')
}

export const signup = (req: Request, res: Response) => {
    res.send('signup')
    }