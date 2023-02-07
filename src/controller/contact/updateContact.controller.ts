import { Request, Response } from "express"
import { updateContactService } from "../../services/contact/updateContact.service"

export const updateContactController = async (req: Request, res: Response) => {
    const { name, email, telephone } = req.body

    const { id } = req.params

    await updateContactService({ name, email, telephone }, id)

    return res.status(200).json({ message: "Successfully update" })
}

