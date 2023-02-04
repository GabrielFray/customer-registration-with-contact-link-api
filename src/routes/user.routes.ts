import { Router } from "express";
import { createUserController } from "../controller/user/createUser.controller";
import { deleteUserController } from "../controller/user/deleteUser.controller";
import { listOwnUserController } from "../controller/user/listOwnUser.controller"
import { listUsersController } from "../controller/user/listUsers.controller"
import { updateUserController } from "../controller/user/userUpdate.controller";
import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware"

const routes = Router();

export const userRoutes = () => {
    routes.post("", createUserController)
    routes.get("", verifyAuthUserMiddleware, listUsersController)
    routes.get("/:id", verifyAuthUserMiddleware, listOwnUserController)
    routes.patch("/:id", verifyAuthUserMiddleware, updateUserController)
    routes.delete("/:id", verifyAuthUserMiddleware, deleteUserController)

    return routes;
}