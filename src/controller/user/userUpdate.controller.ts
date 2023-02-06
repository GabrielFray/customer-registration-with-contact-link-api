import { Request, Response } from "express"
import { updateUserService } from "../../services/user/updateUser.service"

export const updateUserController = async (req: Request, res: Response) => {
    const { name, email, password, telephone } = req.body

    const { id } = req.user

    await updateUserService({ name, email, password, telephone }, id)

    return res.status(200).json({ message: "Successfully update" });
}


