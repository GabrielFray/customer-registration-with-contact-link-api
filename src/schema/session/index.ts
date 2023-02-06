import * as yup from "yup";
import { IUserLogin } from "../../interfaces/user";

export const login: yup.SchemaOf<IUserLogin> = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
});
