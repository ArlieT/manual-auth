import prisma from "../../../lib/prisma"
import { NextResponse } from 'next/server'

export type UserType = {
  username: string,
  password: string,
  email: string
}

import jwt from "jsonwebtoken";
export async function POST(req: Request) {
  const res: UserType = await req.json()
  console.log('User req')
  console.log(res)

  if (res.username || res.password) {

    const useraccount = await prisma.user.findFirst({
      where: {
        username: res.username,
        password: res.password,
      }
    })

    console.log("Found")
    console.log({ useraccount })

    if (useraccount) {
      const token = jwt.sign({ username: useraccount.username }, "your-secret-key", { expiresIn: "1h" });
      return NextResponse.json({ msg: "Accepted", token });
    }
    return NextResponse.json("No account found")
  } else {
    return NextResponse.json("Invalid request")
  }


}