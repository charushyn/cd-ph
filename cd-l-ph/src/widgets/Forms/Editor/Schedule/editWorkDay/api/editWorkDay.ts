
import reqUrl from "../../../../../../shared/utils/urls/reqUrlBack"
export default async function editWorkDay(values : {whichDay: number, isOpen: boolean, from?: Date, to?: Date}){
    const body = JSON.stringify({
        id: values.whichDay,
        isOpen: values.isOpen,
        time: values.isOpen ? {
            from: values.from,
            to: values.to
        } : '',
    })
    const response: any = await fetch(`${reqUrl}/edit-work-day`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body
    }).then((res) => {
        console.log(res)
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