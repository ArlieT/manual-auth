import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"




export async function GET(req:Request){
    const productId = await req.json();
    console.log({productId})
    // try {
    //     const product = await prisma.product.findFirst({
    //         where:{
    //             id: productId
    //         }
    //     })
    //     return NextResponse.json({product})
    // } catch (error) {
    //     NextResponse.json({message:error},{status:400})
    // }
  return NextResponse.json({msg:'hello'})
}   