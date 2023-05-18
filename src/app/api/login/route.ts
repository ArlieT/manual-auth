import prisma from "../../../lib/prisma"
import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken';
export type UserType = {
  username: string,
  password: string,
  email: string
}



export async function POST(req: Request) {
  const res: UserType = await req.json()
  console.log('body', res)



  if (res.username && res.password) {

    const useraccount = await prisma.user.findFirst({
      where: {
        username: res.username,
        password: res.password,
      }
    })
    console.log('FOUND: ', useraccount)

    if (useraccount) {
      const secretKey = 'secret'; // Replace with your own secret key

      const payload = {
        username: useraccount.username,
      };

      const token = jwt.sign(payload, secretKey, { expiresIn: '1m' });
      console.log('token:', token);

      // const token = jwt.sign({ username: useraccount.username }, "your-secret-key", { expiresIn: "1h" });
      return NextResponse.json({ msg: "Accepted", token });
    }
    return NextResponse.json("No account found")
  } else {
    return NextResponse.json("Invalid request")
  }


}