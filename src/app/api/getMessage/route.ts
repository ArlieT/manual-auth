


import prisma from '@/lib/prisma';


import { NextRequest, NextResponse } from 'next/server'
// import { headers } from 'next/headers';

export async function GET(req: NextRequest) {

    const user = await prisma.user.findMany({
        where:{
            name:'testuser'
        }
    })
    

    
    const usermesssage = await prisma.message.findMany({
        where:{
            sender:{
                name:'testuser'
            }
        }
    })
    
    
    if(user){
        const response = {
            user: user,
            messages: usermesssage
          }  
    return NextResponse.json(response)
    }
    else{
        return NextResponse.json('No user')
    }
    // const token = req.headers.authorization?.replace('Bearer',"")



}