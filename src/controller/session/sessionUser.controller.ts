import { Request, Response } from "express";
import { sessionUserService } from "../../services/session/sessionUser.service";

export const sessionUserController = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const token = await sessionUserService({ email, password });

    return res.status(200).json({ token });
};

