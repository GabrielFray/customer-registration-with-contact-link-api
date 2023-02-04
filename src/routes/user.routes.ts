import { Router } from "express";
import { userCreateController } from "../controller/user/createUser.controller";
import { listOwnUserController } from "../controller/user/listOwnUser.controller";

const routes = Router();

export const userRoutes = () => {
    routes.post("", userCreateController);
    routes.get("/:id", listOwnUserController)

    return routes;
}