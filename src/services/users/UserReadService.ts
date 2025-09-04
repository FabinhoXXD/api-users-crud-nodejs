import { PrismaClient } from "@prisma/client"

class UserReadService {
    async execute(id:number){
        const prisma = new PrismaClient();
        
        const user = await prisma.user.findUnique({
            where:{
                id
            },
            select:{
                id:true,
                name:true,
                email:true,
                createdAt:true,
                updatedAt:true
            }
        })
        if (!user) {
            throw new Error("Usuário não encontrado!")
        }
        return user;
    }
}

export {UserReadService}