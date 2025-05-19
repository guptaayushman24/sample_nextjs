'use server'
import {prisma} from '../../lib/prisma'

export default async function addUser(name:string){
    try{
        const data = await prisma.user.create({
        data:{
            name:name
        }
    })
    return data
    }
    catch(err){
        console.log(err);
    }
}