import { Request, Response } from "express"
import {UserDeleteService} from '../../services/users/UserDeleteService';

class UserDeleteController {
    async handle(req:Request, res:Response){
        const {id} = req.params;
        const numericId = Number(id);
        
        if (!id || isNaN(numericId)) {
            return res.status(400).json({message:"ID é obrigatorio"})
        }

        try {
            const userDeleteService = new UserDeleteService();
            const result = await userDeleteService.execute(numericId)
            return res.json(result);
        } catch (error:any) {
            if (error && typeof error.code === 'string' && error.code === 'P2025') {
                return res.status(400).json({ error: "Usuário não encontrado." });
            }
            if(error instanceof Error){
                return res.status(400).json({error: error.message});
            }
            return res.status(404).json({ message: "Erro nao identificado." });
        }
    }
}

export {UserDeleteController}