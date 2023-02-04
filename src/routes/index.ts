import { Express } from "express"
import { userRoutes } from "./user.routes"
import { handleErrorMiddleware } from "../middlewares/handleError.middleware"

export const appRoutes = (app: Express) => {
    app.use("/user", userRoutes())
    app.use(handleErrorMiddleware)
}