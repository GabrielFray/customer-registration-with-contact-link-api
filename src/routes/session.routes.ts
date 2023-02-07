import { Router } from "express"

import { sessionUserController } from "../controller/session/sessionUser.controller"
import { validateSchemaMiddleware } from "../middlewares/validateSchema.middleware"
import { loginSchema } from "../schema/session"

const routes = Router()

export const sessionRoutes = () => {
    routes.post("", validateSchemaMiddleware(loginSchema), sessionUserController)

    return routes
}