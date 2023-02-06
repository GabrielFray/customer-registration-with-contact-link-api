import { Router } from "express";
import { createContactController } from "../controller/contact/createContact.controller";
import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware";

const routes = Router()

export const contactRoutes = () => {
    routes.post("", verifyAuthUserMiddleware, createContactController)

    return routes
}