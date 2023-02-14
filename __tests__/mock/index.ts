import { IContactRequest } from "../interfaces/contact";
import { IUserLogin, IUserRequest } from "../interfaces/user";

export const mockedUser: IUserRequest = {
    name: "Flavinho do pneu",
    email: "flavinho@email.com",
    password: "123456",
    telephone: "19997062651"
}

export const mockedUserLogin: IUserLogin = {
    email: "flavinho@email.com",
    password: "123456"
}

export const mockedContact: IContactRequest = {
    name: "Shaolin matador de porco",
    email: "shaolinmdp@email.com",
    telephone: "20927052350",
    userId: ""
}

export const userWithout =
{
    name: "Flavinho do pneu",
    email: "flavinho@email.com",
}

export const contactWithout =
{
    name: "Shaolin matador de porco",
    telephone: "20927052350",
}

