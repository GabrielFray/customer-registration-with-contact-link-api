import { Router } from "express";

import { listContactsController } from "../controller/contact/listContacts.controller"
import { createContactController } from "../controller/contact/createContact.controller"
import { updateContactController } from "../controller/contact/updateContact.controller";
import { deleteContactController } from "../controller/contact/deleteContact.controller";

import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware"

const routes = Router()

export const contactRoutes = () => {
    routes.post("", verifyAuthUserMiddleware, createContactController)
    routes.get("", verifyAuthUserMiddleware, listContactsController)
    routes.patch("/:id", verifyAuthUserMiddleware, updateContactController)
    routes.delete("/:id", verifyAuthUserMiddleware, deleteContactController)

    return routes
}