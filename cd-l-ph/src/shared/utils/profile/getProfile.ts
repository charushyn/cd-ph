

export default async function getProfile(token: string){
    const response = await fetch(`http://localhost:1488/get-profile`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            mode: 'cors',
            'Authorization': `Bearer ${token}`
        },
    }).then(data => {
        if(data.ok){
            return data.json()
        }
        throw new Error()
    }).catch(err => {
        throw new Error()
    })
    return response
}