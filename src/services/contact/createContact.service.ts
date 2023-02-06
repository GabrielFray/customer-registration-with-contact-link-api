import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IContactRequest } from "../../interfaces/contact";

export const createContactService = async ({ name, email, telephone, userId }: IContactRequest) => {
    const userRepository = AppDataSource.getRepository(User)
    const contactRepository = AppDataSource.getRepository(Contact)

    const findUser = await userRepository.findOneBy({ id: userId })

    const contactAlreadyExist = await contactRepository.findOneBy({ email: email })

    if (!findUser) {
        throw new AppError("User not found", 404)
    }

    const contact = contactRepository.create({ name, email, telephone })
    contact.user = findUser!

    await contactRepository.save(contact)

    return contact
}