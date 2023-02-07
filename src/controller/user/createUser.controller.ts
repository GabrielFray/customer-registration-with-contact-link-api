import { Request, Response } from "express"
import { createUserService } from "../../services/user/createUser.service"

export const createUserController = async (req: Request, res: Response) => {
    const { name, password, email, telephone } = req.body

    const user = await createUserService({ name, password, email, telephone })

    return res.status(201).json(user)
}
