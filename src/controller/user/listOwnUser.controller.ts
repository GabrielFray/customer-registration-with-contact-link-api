import { Response, Request } from "express"
import { listOwnUserService } from "../../services/user/listOwnUser.service"

export const listOwnUserController = async (req: Request, res: Response) => {
    const { id } = req.user

    console.log(id)

    const user = await listOwnUserService(id)

    return res.status(200).json(user)
};
