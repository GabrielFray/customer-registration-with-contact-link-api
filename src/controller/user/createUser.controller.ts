import { Request, Response } from "express";
import { userCreateService } from "../../services/user/userCreate.service";

export const userCreateController = async (req: Request, res: Response) => {
    const { name, password, email, telephone } = req.body;

    const user = await userCreateService({ name, password, email, telephone });

    return res.status(201).json(user);
};
