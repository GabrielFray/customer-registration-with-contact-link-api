import { Request, Response } from "express"
import { listContactService } from "../../services/contact/listContacts.service"

export const listContactsController = async (
    req: Request,
    res: Response
) => {
    const { id } = req.user

    const contacts = await listContactService(id)

    return res.status(200).json(contacts)
}
