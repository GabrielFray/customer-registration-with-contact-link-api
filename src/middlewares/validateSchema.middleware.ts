import { Request, Response, NextFunction } from "express";
import { AnySchema, ValidationError } from "yup";

export const validateSchemaMiddleware =
    (serializer: AnySchema) =>
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                const validatedBody = await serializer.validate(req.body, {
                    stripUnknown: true,
                    abortEarly: false,
                });

                req.body = validatedBody;

                return next();
            } catch (error) {
                if (error instanceof ValidationError) {
                    return res.status(400).json({
                        message: error.errors,
                    });
                }
                throw error;
            }
        };

