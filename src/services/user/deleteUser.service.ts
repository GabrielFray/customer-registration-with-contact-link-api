import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"

export const deleteUserService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({ id: id })

    if (!findUser) {
        throw new AppError("User is not found", 404)
    }

    if (!findUser!.isActive) {
        throw new AppError("User has already been deleted", 403)
    }
    await userRepository.update(id, { isActive: false })

    return true
}