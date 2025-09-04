import { Request, Response, NextFunction } from "express";

function errorHandler(err: any, req: Request, res: Response, next: NextFunction){
    if (err instanceof SyntaxError) {
        return res.status(404).json({ message: 'Falha no request. Verifique a sintaxe.' });
    }
}

export {errorHandler}