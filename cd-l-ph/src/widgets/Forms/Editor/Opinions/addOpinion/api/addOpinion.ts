import reqUrl from "../../../../../../shared/utils/urls/reqUrlBack"

export default async function addOpinion(values: {
    ua: {
        description: string,
        name: string,
        position: string,
    },
    ru: {
        description: string,
        name: string,
        position: string,
    },
    pl: {
        description: string,
        name: string,
        position: string,
    },
    en: {
        description: string,
        name: string,
        position: string,
    },
    img: File
}){
    console.log(values)
    const body = new FormData()

    body.append('img', values.img)

    body.append('ua', JSON.stringify(values.ua))
    body.append('pl', JSON.stringify(values.pl))
    body.append('ru', JSON.stringify(values.ru))
    body.append('en', JSON.stringify(values.en))

    console.log(body)
    const response: any = await fetch(`${reqUrl}/add-opinion`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
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