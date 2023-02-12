import "express-async-errors";
import { appRoutes } from "./routes";
import express from "express";
import "reflect-metadata";
import cors from "cors"

const app = express();

app.use(cors())

app.use(express.json());

appRoutes(app)

export default app;
