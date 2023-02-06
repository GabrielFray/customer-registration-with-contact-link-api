import { Request, Response } from "express";
import { createContactService } from "../../services/contact/createContact.service";

export const createContactController = async (req: Request, res: Response) => {
    const { name, email, telephone } = req.body

    const userId = req.user.id

    console.log(userId)

    const contact = await createContactService({ userId, name, email, telephone })

    return res.status(201).json(contact)
}