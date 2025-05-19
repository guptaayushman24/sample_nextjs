'use server'
import {prisma} from '../../lib/prisma'

export default async function addUser(name:string){
    try{
        await prisma.user.createMany({
        data:{
            name:name
        }
    })
    }
    catch(err){
        console.log(err);
    }
}