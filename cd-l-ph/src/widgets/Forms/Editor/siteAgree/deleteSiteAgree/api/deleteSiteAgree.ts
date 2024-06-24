export default async function deleteSiteAgree(id: number){
    const body = JSON.stringify({id: id})
    const response = await fetch(`http://localhost:1488/delete-site-agreement`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body
    }).then((res) => {
        if(res.ok){
            return res.json()
        }
        if(res.status == 401){
            throw new Error('Unauthorized')
        }
        throw new Error()
    }).catch((e) => {
        return e
    })
    return response
}