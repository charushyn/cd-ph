import reqUrl from "../../../reqUrl"

export default async function editService(values: {
    ua: {
        title: string,
        description: string,
    },
    ru: {
        title: string,
        description: string,
    },
    pl: {
        title: string,
        description: string,
    },
    en: {
        title: string,
        description: string,
    },
    id: number,
    bgPhoto?: File,
    iconSVG?: File,
}){
    console.log(values)
    const body = new FormData()

    values.iconSVG ? body.append('iconSVG', values.iconSVG) : ''
    values.bgPhoto ? body.append('bgPhoto', values.bgPhoto) : ''

    body.append('ua', JSON.stringify(values.ua))
    body.append('pl', JSON.stringify(values.pl))
    body.append('ru', JSON.stringify(values.ru))
    body.append('en', JSON.stringify(values.en))
    body.append('id', JSON.stringify(values.id))

    
    console.log(body)
    const response: any = await fetch(`${reqUrl}/edit-service`, {
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
    }).catch((e: any) => {
        throw new Error(e.message)
    })
    return response
}