import {Request, Response} from 'express'
import { UserRegisterService } from '../../services/users/UserRegisterService';


class UserRegisterController {
    async handle(req:Request, res:Response){
        const {name, email, password} = req.body

        if(!name || !email || !password){
            return res.status(400).json({message:"Todos os campos são obrigatorios!"})
        }

        try {
            const userRegisterService = new UserRegisterService();
            const result = await userRegisterService.execute({name,email,password});
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({error: error.message});
            }
            return res.status(404).json({ message: "Erro nao identificado." });
            
        }
        

        
        
    }
}

export {UserRegisterController}