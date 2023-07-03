




export function truncate(string:string){

const truncated =  string.slice(0,45) + '...'
console.log({truncated})
return truncated 

}







export function truncateTitle(string:string){

    const truncated =  string.slice(0,20) + '...'
    console.log({truncated})
    return truncated 
    
    }