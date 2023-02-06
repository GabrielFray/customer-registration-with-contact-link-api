import { Router } from "express";

import { sessionUserController } from "../controller/session/sessionUser.controller";

const routes = Router()

export const sessionRoutes = () => {
    routes.post("", sessionUserController)

    return routes
}