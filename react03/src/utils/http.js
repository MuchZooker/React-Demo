

export const httpGet =function(url){
   return fetch(url)
}

export const httpPost=function(url,parma){
    return fetch(url,{
        headers:{

        },
        body:'userName=123'
    })
}