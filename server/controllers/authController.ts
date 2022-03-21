import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel';
import bcrypt from 'bcrypt';

// @desc    Login user
// @route   POST /auth/login
// @access  Public

export const login = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            user: {
                _id: user._id,
                email: user.email,
                token: user.generateToken(),
            },
        });
    } else {
        res.status(400);
        throw new Error('Invalid Crendentials');
    }
});

// @desc    Signup user
// @route   POST /auth/signup
// @access  Public

export const signup = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error('Email and password are required');
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({ email, password });

    if (user) {
        res.status(201);
        res.json({
            message: 'User created',
            user: {
                _id: user._id,
                email: user.email,
                token: user.generateToken(),
            },
        });
    } else {
        res.status(400);
        throw new Error('User not created');
    }
});
