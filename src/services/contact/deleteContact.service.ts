import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { AppError } from "../../errors/appError"

export const deleteContactService = async (id: string) => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const findContact = await contactRepository.findOne({ where: { id } })

    if (!findContact) {
        throw new AppError("Contact has already been deleted or does not exist", 404)
    }

    await contactRepository.delete({ id })

    return true
}