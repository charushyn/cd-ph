import reqUrl from "../../../../../../shared/utils/urls/reqUrlBack"

export default async function addSiteAgree(values: {
    ua: {
        text: string
        src: string,
    },
    ru: {
        text: string
        src: string,
    },
    pl: {
        text: string
        src: string,
    },
    en: {
        text: string
        src: string,
    }
}){
    const body = new FormData()
    body.append('ua', JSON.stringify(values.ua))
    body.append('pl', JSON.stringify(values.pl))
    body.append('ru', JSON.stringify(values.ru))
    body.append('en', JSON.stringify(values.en))

    console.log(body)
    const response: any = await fetch(`${reqUrl}/add-site-agreements`, {
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