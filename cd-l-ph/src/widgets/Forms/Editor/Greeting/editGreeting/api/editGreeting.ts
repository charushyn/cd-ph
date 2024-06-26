import reqUrl from "../../../reqUrl"

export default async function editGreeting(values: {
    ua: {
        welcome: string,
        mission: string,
    },
    ru: {
        welcome: string,
        mission: string,
    },
    pl: {
        welcome: string,
        mission: string,
    },
    en: {
        welcome: string,
        mission: string,
    },
    firstImg?: File,
    secondImg?: File,
}){
    console.log(values)
    const body = new FormData()

    values.firstImg ? body.append('firstImg', values.firstImg) : ''
    values.secondImg ? body.append('secondImg', values.secondImg) : ''

    body.append('ua', JSON.stringify(values.ua))
    body.append('pl', JSON.stringify(values.pl))
    body.append('ru', JSON.stringify(values.ru))
    body.append('en', JSON.stringify(values.en))

    
    console.log(body)
    const response: any = await fetch(`${reqUrl}/edit-greeting`, {
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