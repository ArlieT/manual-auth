import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"



export async function POST(req: Request) {
  const { productId, quantity, userEmail, userId } = await req.json()
  console.log({ productId, quantity, userEmail })
  try {

    const user = await prisma.user.findFirst({
      where: {
        email: userEmail
      }
    })
    console.log('email ', user)
    if (!user) {
      return NextResponse.json({ error: 'user not found' }, { status: 404 });
    }


    const product = await prisma.product.findFirst({
      where: {
        id: productId
      }
    })


    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }


    const cartItem = await prisma.cartItem.create({
      data: {
        user: { connect: { id: Number(user.id) } },
        product: { connect: { id: Number(productId) } },
        quantity: parseInt(quantity),
      },
    });

    console.log('created ', cartItem);
    if (cartItem) {
      console.log('res ', cartItem)
      return NextResponse.json({ cartItem });
    } else {

      return NextResponse.json({ message: "error adding to cart" }, { status: 400 })
    }



  } catch (error) {
    console.log({ error })
    return NextResponse.json({ message: error }, { status: 500 })
  }
}



