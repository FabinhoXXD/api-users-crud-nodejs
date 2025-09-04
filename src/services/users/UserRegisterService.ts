import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';

interface PropsUser{
    name:string;
    email:string;
    password:string;
}

class UserRegisterService {
    
    async execute({name,email,password}:PropsUser){
        const prisma = new PrismaClient();
        const userAlreadyExists = await prisma.user.findUnique({
            where:{email}
        })

        if (userAlreadyExists) {
            throw new Error("E-mail já cadastrado.");
        }

        //criptografa a senha
        const passwordHash = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data:{
                name,
                email,
                password:passwordHash
            },
            select:{
                name:true,
                email:true,
                createdAt:true,
                updatedAt:true
            }
        })

        return user;
    }
}

export {UserRegisterService}