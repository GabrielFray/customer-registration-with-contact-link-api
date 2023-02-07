import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";
import { IContactUpdate } from "../../interfaces/contact";


export const updateContactService = async ({ name, email, telephone }: IContactUpdate, id: string) => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const findContact = await contactRepository.findOneBy({ id })

    if (!findContact) {
        throw new AppError("Contact is not found", 404)
    }

    contactRepository.update(id, {
        name: name ? name : findContact!.name,
        email: email ? email : findContact!.email,
        telephone: telephone ? telephone : findContact!.telephone,
        updatedAt: new Date()
    })

    return true
}