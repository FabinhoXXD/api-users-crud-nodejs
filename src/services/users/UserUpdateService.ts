import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';

interface PropsUser{
    name?:string;
    email:string;
    password?:string;
}

interface PropsDataUpdate{
    name?:string;
    password?:string;
}

class UserUpdateService {
    async execute({name,email,password}:PropsUser){
        const prisma = new PrismaClient();
        const dataToUpdate: PropsDataUpdate = {};

        if (name) dataToUpdate.name = name;
        if (password) {
            const passwordHash = await bcrypt.hash(password, 10);
            dataToUpdate.password = passwordHash;
        }

        const updateUser = await prisma.user.update({
            where:{email:email},
            data:dataToUpdate,
            select:{
                name:true,
                email:true
            }
        })

        return updateUser;
    }
}

export {UserUpdateService}