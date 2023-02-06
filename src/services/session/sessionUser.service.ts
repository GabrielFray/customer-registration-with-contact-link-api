import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserLogin } from "../../interfaces/user";

export const sessionUserService = async ({ email, password }: IUserLogin) => {
    const userRepository = AppDataSource.getRepository(User)

    const account = await userRepository.findOne({
        where: { email: email },
        select: ["password", "id"]
    })
    if (!account) {
        throw new AppError("Incorrect email / password", 403)
    }

    if (!bcrypt.compareSync(password, account.password)) {
        throw new AppError("Incorrect email/password", 403)
    }

    const token = jwt.sign({ email: email, id: account?.id },
        process.env.SECRET_KEY as string,
        {
            expiresIn: "24h",
        })

    return token
}