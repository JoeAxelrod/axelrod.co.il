import { Router, Request, Response } from 'express';
import User, { IUser } from '../models/User';
import { body, validationResult, ValidationChain } from 'express-validator';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();

const router: Router = Router();

router.post(
    '/register',
    [
            body('phoneNumber').isMobilePhone('any'),
            body('password').isLength({ min: 5 }),
    ] as ValidationChain[],
    async (req: Request, res: Response): Promise<Response> => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
            }

            const { phoneNumber, password }: IUser = req.body;

            const user: IUser = new User({ phoneNumber, password });

            try {
                    await user.save();

                    const secretKey: string | undefined = process.env.JWT_SECRET;
                    if (!secretKey) {
                            throw new Error('JWT_SECRET environment variable not found');
                    }

                    const token: string = jwt.sign({ _id: user._id }, secretKey);

                    return res.status(201).json({ token });
            } catch (error) {
                    console.error('An error occurred while registering user:', error);
                    return res.status(500).json({ error: 'Internal Server Error' });
            }
    }
);

export default router;
