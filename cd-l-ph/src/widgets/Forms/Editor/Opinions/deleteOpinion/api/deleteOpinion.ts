export default async function deleteOpinion(id: number){
    const body = JSON.stringify({id: id})
    const response = await fetch(`http://localhost:1488/delete-opinion`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body
    }).then(data => {
        if(data.ok){
            return data.json()
        }
        throw new Error()
    }).catch(err => {
        return err
    })
    return response
}