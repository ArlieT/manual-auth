import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    
    try {
        const newProduct = await prisma.product.create({
            data: {
                name: 'Adidas Samba2',
                description: 'Adidas Samba....',
                price: 7000,
                // image: 'sportsdirect.com/images/products/12689303_l.jpg',
                image: 'https://www.sportsdirect.com/images/imgzoom/16/16106701_xxl.jpg',
            user: { connect: { id: 1 } }, // Connect the product to an existing user by their ID
          },
        });
      
        console.log({ newProduct });
        if (!newProduct) return NextResponse.json({ msg: 'creating failed' }, { status: 500 });
        return NextResponse.json({ newProduct });
      } catch (error) {
        console.log('Prisma Error:', error);
        return NextResponse.json({ error }, { status: 500 });
      }


}