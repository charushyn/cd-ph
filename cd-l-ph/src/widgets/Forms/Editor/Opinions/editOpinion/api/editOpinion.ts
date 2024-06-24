export default async function editOpinion(values: {
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
    id: number,
    img?: File,
}){
    console.log(values)
    const body = new FormData()

    values.img ? body.append('img', values.img) : ''

    body.append('ua', JSON.stringify(values.ua))
    body.append('pl', JSON.stringify(values.pl))
    body.append('ru', JSON.stringify(values.ru))
    body.append('en', JSON.stringify(values.en))
    body.append('id', JSON.stringify(values.id))

    
    console.log(body)
    const response: any = await fetch(`http://localhost:1488/edit-opinion`, {
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