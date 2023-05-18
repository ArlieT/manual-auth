
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken'
export async function GET(req: Request) {
    const secretKey = "secret"
    // const body = await req.json()
    // console.log({ body })
    // const headers = new Headers(req.headers);
    // const token = headers.get('authorization')
    // console.log(token)

    const headersList = headers();
    const authHeader = headersList.get('authorization');
    console.log(authHeader)
    if (authHeader) {
        const token = authHeader.split(' ')[1]
        console.log({ token })
        jwt.verify(token, secretKey, (err, decoded) => {
            // if (err !== null) {
            //     //verification failed
            //     return NextResponse.json(err, {
            //         status: 400
            //     })
            // }
            console.log({err})
            console.log({ decoded })
            return NextResponse.json({decoded})
        })

    }
    return NextResponse.json({msg:'Need Authorization'})
}