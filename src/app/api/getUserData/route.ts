import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers';

export async function GET(req: NextRequest) {
    const headersList = headers();
    // const authorization = req.headers.get;
    const requestHeaders = new Headers(req.headers);
    console.log(requestHeaders.get('authorization'))


    return NextResponse.json({ requestHeaders })
    // const token = req.headers.authorization?.replace('Bearer',"")



}