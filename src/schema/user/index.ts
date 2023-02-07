import * as yup from "yup";
import { IUserRequest, IUserUpdate } from "../../interfaces/user";


export const createSchema: yup.SchemaOf<IUserRequest> = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().email().required(),
    telephone: yup.string().required()
});

export const updateSchema: yup.SchemaOf<IUserUpdate> = yup.object().shape(
    {
        email: yup
            .string()
            .email()
            .when(["name", "password", "telephone"], {
                is: (name: string, password: string) => {
                    if (name || password) {
                        return true;
                    } else {
                        return false;
                    }
                },
                then: (schema) => schema.notRequired(),
                otherwise: (schema) => schema.required(),
            }),
        name: yup.string().when(["email", "password"], {
            is: (email: string, password: string) => {
                if (email || password) {
                    return true;
                } else {
                    return false;
                }
            },
            then: (schema) => schema.notRequired(),
            otherwise: (schema) => schema.required(),
        }),
        password: yup.string().when(["email", "name"], {
            is: (email: string, name: string) => {
                if (email || name) {
                    return true;
                } else {
                    return false;
                }
            },
            then: (schema) => schema.notRequired(),
            otherwise: (schema) => schema.required(),
        }),
        telephone: yup.string()
    },
    [
        ["name", "password"],
        ["email", "password"],
        ["email", "name"],
        ["email", "name"],
    ]
);