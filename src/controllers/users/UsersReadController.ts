import { Request, Response } from "express";
import { UsersReadService } from "../../services/users/UsersReadService";

class UsersReadController {
    async handle(req:Request, res:Response){
        
        const users = new UsersReadService;
        const result = await users.execute();

        return res.json(result);
    }
}

export {UsersReadController}