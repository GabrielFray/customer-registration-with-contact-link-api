import * as bcrypt from "bcryptjs"
import { AppError } from "../../errors/appError"
import { User } from "../../entities/user.entity"
import { AppDataSource } from "../../data-source"
import { IUserRequest } from "../../interfaces/user"


export const createUserService = async ({ name, password, email, telephone }: IUserRequest) => {
    const userRepository = AppDataSource.getRepository(User)

    const emailAlreadyExists = await userRepository.findOneBy({
        email: email,
    })

    if (emailAlreadyExists) {
        throw new AppError("Email already exists", 403)
    }

    password = bcrypt.hashSync(password, 10)

    const user = await userRepository.save({ name, password, email, telephone })

    return { ...user, password: undefined }
}


