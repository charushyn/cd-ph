
import reqUrl from "../../../../../../shared/utils/urls/reqUrlBack"
export default async function deleteOpinion(id: number){
    const body = JSON.stringify({id: id})
    const response = await fetch(`${reqUrl}/delete-opinion`, {
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
        if(data.status == 401){
            throw new Error('Unauthorized')
        }
        throw new Error()
    }).catch(err => {
        throw new Error(err)
    })
    return response
}