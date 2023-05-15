import api from "./api"
import { removeItemToken, setItemToken } from "./tokenServices"
import router from 'next/navigation'




export const login = async (username: string, password: string) => {
    console.log('axios: ', username, password)
    if (username && password) {
        return await api.post('api/login', {
            username: username,
            password: password
        }).then((res) => {
            console.log('res: login', res)
            setItemToken(res.data.token);

            return res
        })
    } else {
        console.log('error');
        return Promise.reject('Missing username or password');
    }
}


export const logout = () => {
    removeItemToken()
}


// export const authenticate = async () => {
//     api.post
// }