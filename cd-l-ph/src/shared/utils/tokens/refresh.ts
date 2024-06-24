export default async function refresh(){
    const response = await fetch('http://localhost:1488/refresh', {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
    }).then(data => {
        if(data.ok){
            return data.json()
        }
        throw new Error()
    }).catch((e) => {
        return e
    })

    return response;
}