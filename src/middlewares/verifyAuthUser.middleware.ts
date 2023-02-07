import jwt from "jsonwebtoken"
import { AppError } from "../errors/appError"
import { Request, Response, NextFunction } from "express"

export const verifyAuthUserMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        let token = req.headers.authorization?.split(" ")[1];

        jwt.verify(
            token as string,
            process.env.SECRET_KEY as string,
            (err: any, decoded: any) => {
                if (!decoded || err) {
                    throw new AppError("Invalid token", 401);
                }

                req.user = { id: decoded.id };

                next();
            }
        );
    } catch {
        throw new AppError("Invalid token", 401);
    }
}