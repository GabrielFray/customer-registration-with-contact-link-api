import { Request, Response } from "express"
import { updateUserService } from "../../services/user/updateUser.service"

export const updateUserController = async (req: Request, res: Response) => {
    const user = req.body

    const { id } = req.params

    if ("id" in user || "isActive" in user) {
        return res.status(401).json({
            message: "Data entered cannot be updated",
        })
    }
    await updateUserService(user, id)

    return res.status(200).json({ message: "Successfully update" });
}


