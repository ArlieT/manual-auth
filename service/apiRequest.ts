


import api from "./api"


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