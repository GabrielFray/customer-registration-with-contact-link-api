import { Request, Response } from "express";
import { deleteContactService } from "../../services/contact/deleteContact.service";


export const deleteContactController = async (req: Request, res: Response) => {
    const { id } = req.params

    await deleteContactService(id)

    return res.status(204).json()
}