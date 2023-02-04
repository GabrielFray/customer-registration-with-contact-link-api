import { hashSync } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/user";

export const updateUserService = async (
    { name, email, password }: IUserUpdate,
    id: string
) => {
    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOneBy({
        id,
    });

    if (!findUser) {
        throw new AppError("User is not found", 404);
    }

    const user = await userRepository.update(id, {
        name: name ? name : findUser!.name,
        email: email ? email : findUser!.email,
        password: password ? hashSync(password, 10) : findUser!.password,
    });

    return user!;
};

