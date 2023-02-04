import { userRoutes } from "./user.routes"
import { Express } from "express";

export const appRoutes = (app: Express) => {
    app.use("/user", userRoutes())
}