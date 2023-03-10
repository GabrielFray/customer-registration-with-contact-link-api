import { hashSync } from "bcryptjs"
import { AppError } from "../../errors/appError"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUserUpdate } from "../../interfaces/user"

export const updateUserService = async ({ name, email, password, telephone }: IUserUpdate, id: string) => {
    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({ id })

    if (!findUser) {
        throw new AppError("User is not found", 404)
    }

    userRepository.update(findUser!.id, {
        name: name ? name : findUser!.name,
        email: email ? email : findUser!.email,
        password: password ? hashSync(password, 10) : findUser!.password,
        telephone: telephone ? telephone : findUser!.telephone,
        updatedAt: new Date()
    })

    return true
}

