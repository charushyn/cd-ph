import reqUrl from "../../../../../../shared/utils/urls/reqUrlBack"

export default async function deleteFAQ(id: number){
    const body = JSON.stringify({id: id})
    const response = await fetch(`${reqUrl}/delete-faq`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            mode: 'cors',
        },
        credentials: 'include',
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