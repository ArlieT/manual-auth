import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";






export async function GET() {
    try {
        const products = await prisma.product.findMany();
        if(products){
            return  NextResponse.json({products})
        }
    } catch (error) {
        
    }

}