import { AppError } from "../../errors/appError"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { Contact } from "../../entities/contact.entity"
import { IContactRequest } from "../../interfaces/contact"

export const createContactService = async ({ name, email, telephone, userId }: IContactRequest) => {
    const userRepository = AppDataSource.getRepository(User)
    const contactRepository = AppDataSource.getRepository(Contact)

    const findUser = await userRepository.findOneBy({ id: userId })

    const contactAlreadyExist = await contactRepository.findOneBy({ email: email })

    if (!findUser) {
        throw new AppError("User not found", 404)
    }

    if (contactAlreadyExist) {
        throw new AppError("This email is already being used in another contact")
    }

    const contact = contactRepository.create({ name, email, telephone })
    contact.user = findUser!

    await contactRepository.save(contact)

    return contact
}