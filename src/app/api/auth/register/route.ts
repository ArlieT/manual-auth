import prisma from "@/lib/prisma"
import { User } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"
import { NextRequest, NextResponse } from "next/server"



export async function POST(req: Request) {
    try {
        const data: User = await req.json();
        console.log(data);

        if (data.username && data.password) {
            const registerUser = await prisma.user.create({
                data: {
                    username: data.username,
                    password: data.password,
                    email: data.email
                }
            });
            if (registerUser) {
                return NextResponse.json({ msg: "Successful" });
            }
            return NextResponse.json("Server error");

        } else {
            return NextResponse.json({ error: "Username and password are required." });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "An error occurred while registering the user." });
    }
}