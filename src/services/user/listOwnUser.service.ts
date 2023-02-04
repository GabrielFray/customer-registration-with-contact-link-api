import { classToPlain } from "class-transformer"
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity"

export const listOwnUserService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: { id }
    });

    return classToPlain(user)
}

