import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"

export const deleteUserService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({ id })

    if (findUser!.isActive === false) {
        throw new AppError("User has already been deleted or does not exist", 400)
    }

    userRepository.update(findUser!.id, { isActive: false })

    return true
}