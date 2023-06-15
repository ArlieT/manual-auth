import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

/* get all items on cart */
export async function POST(req:Request){
    const user = await req.json()
    
    console.log('get cart ',user)
    if(user){
      const cart = await prisma.cartItem.findMany()
    
      if(cart){
        return NextResponse.json({cart})
      }
    
           return NextResponse.json({message:"error getting items"},{status:500})
            
    
    }
    
    
    }