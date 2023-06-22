import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"




export async function POST(req: Request) {
  const userEmail = await req.json()
  console.log('asdf ', userEmail)
  const user = await prisma.user.findFirst({
    where: {
      email: userEmail
    }
  })

  if (user) {
    return NextResponse.json({ user })
  } else {
    return NextResponse.json({ msg: "error" }, { status: 400 })

  }
}