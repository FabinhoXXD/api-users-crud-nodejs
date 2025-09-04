
import {PrismaClient} from "@prisma/client"

class UserDeleteService {
    async execute(id:number){
        const prisma = new PrismaClient();

        const userDeleted = await prisma.user.delete({
            where:{id},
            select:{
                id:true,
                name:true,
                email:true
            }
        })

        return userDeleted;

    }
}

export {UserDeleteService}