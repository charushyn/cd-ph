import reqUrl from "../../../../../../shared/utils/urls/reqUrlBack"

export default async function deleteService(id: number){
    const body = JSON.stringify({id: id})
    const response = await fetch(`${reqUrl}/delete-service`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            mode: 'cors',
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