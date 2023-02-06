import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { User } from "../../entities/user.entity"

export const listContactService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User)

    const contacts = await userRepository.findOne({
        where: { id },
        relations: {
            contacts: true
        }
    })

    return contacts?.contacts;
}
