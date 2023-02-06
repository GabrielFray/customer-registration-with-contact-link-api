import { AppError } from "../../errors/appError"
import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entity"

export const listContactService = async (id: string) => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const contacts = await contactRepository.findOne({
        where: { id },
    })

    if (!contacts) {
        throw new AppError("Contact does not exist", 404)
    }

    return contacts;
};

