


import prisma from "@/lib/prisma"
import api from "./api"


export interface IProduct {
    id: number
    description: string
    name: string
    price: number
    image: string

}
export const getSecuredData = async () => {
    return await api.get('/api/secured-data').then((res) => { console.log(res) })
}



export const postMessage = async (message: string, username: string) => {
    const body = {
        message: message,
        username: username
    }
    console.log({ body })
    return await api.post('/api/postMessage', { body }
    ).then((messageRes) => { return messageRes })
}

export const getProducts = async () => {
    const res = await api.get('/api/getProducts').then((res) => {
        console.log('getting products')
        console.log(res)
        return res
    })
    return res
}

export const postProducts = async () => {
    const res = await api.post('/api/postProduct').then((res) => {
        console.log('creating product products ', res)
        return res
    })
    console.log({res})
    return res

}


export interface IaddToCart {
    userEmail?:string
    quantity?:number
    productId?:number
   

    
}

export const addToCart = async (params:IaddToCart)=>{

    const res = await api.post('api/addToCart',params).then((res)=>res)
    console.log(res.data)
    return res.data
}

export const getUserCart = async (id:any)=>{

    const res = await api.post('api/getUserCart',id).then((res)=>res)
    console.log('axios ', res)
    return res.data
}


/* get user details */

export const getUserDetails = async (email:any)=>{

    const res = await api.post('api/getUserId',email).then((res)=>res)
    console.log('axios ', res)
    return res.data
}