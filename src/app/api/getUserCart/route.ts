import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

/* get all items on cart */
export async function POST(req: Request) {
  const user = await req.json()

  console.log('get cart ', user.cartItem)
  if (user) {
    const cart = await prisma.cartItem.findMany({
      where: {
        userId: user.cartItem.userId
      },
      include: {
        product: {
          select: {
            name: true,
            description: true,
            id: true,
            image: true,
            price: true,
            user: true
          }
        }
      }
    })

    if (cart) {
      console.log('user cart ', cart)
      return NextResponse.json({ cart })
    }
    return NextResponse.json({ message: "error getting items" }, { status: 500 })
  }
}