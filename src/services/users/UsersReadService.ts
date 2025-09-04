import { PrismaClient } from "@prisma/client";

class UsersReadService {
    async execute(){
        const prisma = new PrismaClient();
        const users = await prisma.user.findMany({
            select:{
                id:true,
                name:true,
                email:true,
                createdAt:true,
                updatedAt:true
            }
        });
        if (users.length === 0) {
            return { message: "Nenhum usuário encontrado." };
        }

        return users;
    }
}

export {UsersReadService}