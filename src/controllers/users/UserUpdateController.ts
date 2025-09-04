import { Request, Response } from "express";
import { UserUpdateService } from "../../services/users/UserUpdateService";

class UserUpdateController {
    async handle(req:Request, res:Response){
        
        const {name, email, password} = req.body;

        if (!email) {
            return res.status(400).json({message:"Email é obrigatorio"})
        }

        try {
            const userUpdateService = new UserUpdateService();
            const result = await userUpdateService.execute({name, email, password});
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({error: error.message});
            }
            return res.status(404).json({ message: "Erro nao identificado." });
        }

        

    }
}

export {UserUpdateController}