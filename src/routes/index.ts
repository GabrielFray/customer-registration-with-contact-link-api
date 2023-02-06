import { Express } from "express"
import { userRoutes } from "./user.routes"
import { sessionRoutes } from "./session.routes"
import { handleErrorMiddleware } from "../middlewares/handleError.middleware"
import { contactRoutes } from "./contact.routes"

export const appRoutes = (app: Express) => {
    app.use("/user", userRoutes())
    app.use("/session", sessionRoutes())
    app.use("/contact", contactRoutes())
    app.use(handleErrorMiddleware)
}