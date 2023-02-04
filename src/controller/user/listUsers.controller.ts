import { Request, Response } from "express";
import { listUsersService } from "../../services/user/listUsers.service";

export const listUsersController = async (req: Request, res: Response) => {
    const user = await listUsersService();

    return res.status(200).json(user);
};

