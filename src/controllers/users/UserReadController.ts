import { Request, Response } from "express"
import { UserReadService } from "../../services/users/UserReadService";

class UserReadController {
    async handle(req:Request, res:Response){
        const {id} = req.params;
        const idNumeric = Number(id);

        if (!id || isNaN(idNumeric)) {
            return res.status(400).json({message:"ID é obrigatorio"});
        }

        try {
            const userReadService = new UserReadService();
            const result = await userReadService.execute(idNumeric);
            res.json(result);
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({error: error.message});
            }
            return res.status(404).json({ message: "Erro nao identificado." });
        }
    }
}

export {UserReadController}