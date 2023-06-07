


import prisma from "@/lib/prisma"
import api from "./api"


export interface IProduct {
    id: string
    description:string
    name:string
    price:number
    image:string

}
export const getSecuredData =async ()=>{
    return await api.get('/api/secured-data').then((res)=> {console.log(res)})
}



export const postMessage = async(message:string,username:string)=>{
    const body = {
        message:message,
        username:username
    }
    console.log({body})
    return await api.post('/api/postMessage',{body}
    ).then((messageRes)=>{return messageRes})
}

export const getProducts = async ()=>{
const res = await api.get('/api/getProducts').then((res)=>{
    console.log('getting products')
    console.log(res)
return res
})
return res

}