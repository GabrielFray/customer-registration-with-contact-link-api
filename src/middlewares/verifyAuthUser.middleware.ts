import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

export const verifyAuthUserMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.headers.authorization?.split(" ")[1]

    if (!token) {
        return res.status(401).json({
            message: "Invalid token",
        })
    }

    jwt.verify(token!, process.env.SECRET_KEY!, (error: any, decoded: any) => {
        req.user = {
            isAdm: decoded.isAdm,
            id: decoded.sub,
        }
        if (!decoded) {
            return res.status(401).json({
                message: "Invalid token",
            });
        }
        return next();
    })
}