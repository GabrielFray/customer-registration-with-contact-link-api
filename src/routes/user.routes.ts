import { Router } from "express"

import { createSchema, updateSchema } from "../schema/user"

import { listUsersController } from "../controller/user/listUsers.controller"
import { createUserController } from "../controller/user/createUser.controller"
import { deleteUserController } from "../controller/user/deleteUser.controller"
import { updateUserController } from "../controller/user/userUpdate.controller"
import { listOwnUserController } from "../controller/user/listOwnUser.controller"

import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware"
import { validateSchemaMiddleware } from "../middlewares/validateSchema.middleware"

const routes = Router();

export const userRoutes = () => {
    routes.post("", validateSchemaMiddleware(createSchema), createUserController)
    routes.get("", verifyAuthUserMiddleware, listUsersController)
    routes.get("/self", verifyAuthUserMiddleware, listOwnUserController)
    routes.patch("", validateSchemaMiddleware(updateSchema), verifyAuthUserMiddleware, updateUserController)
    routes.delete("", verifyAuthUserMiddleware, deleteUserController)

    return routes;
}