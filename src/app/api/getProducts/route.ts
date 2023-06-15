import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";






export async function POST() {
    // try {
    //     const products = await prisma.product.findMany();
    //     if(products){
    //         return  NextResponse.json({products})
    //     }
    // } catch (error) {
        
    const newProduct = await prisma.product.create({
        data: {
          name: 'Adidas Samba',
          description: 'This is a new product',
          price: 10,
          image: 'https://sneakernews.com/wp-content/uploads/2023/05/adidas-samba-og-chalk-green-id2054-1.jpg',
          // You can replace 'path/to/image.jpg' with the actual path or URL of the image file
        //   user: { connect: { id: 1 } }, // Connect the product to an existing user by their ID
        },
      });

      NextResponse.json({newProduct})

}

export async function  GET() {
         try {
        const products = await prisma.product.findMany();
        if(products){
            return  NextResponse.json({products})
        }
    } catch (error) {
        return  NextResponse.json({error})
    }
}