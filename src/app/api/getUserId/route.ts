import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    console.log('Received email:', email);
  
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
  
    if (user) {
      return NextResponse.json({ user });
    } else {
      return NextResponse.json({ msg: "error" }, { status: 400 });
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
