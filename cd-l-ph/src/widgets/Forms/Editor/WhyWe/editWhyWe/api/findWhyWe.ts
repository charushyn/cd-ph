'use server'

export default async function findWhyWes(locale: string, id: number){
    const response = await fetch(`${process.env.URL_STATIC_INFORMATION_SECRET}/get-whywes`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'language': `${locale}`
        },
    }).then(data => {
        if(data.ok){
            return data.json()
        }
        throw new Error()
    }).catch(err => {
        return err
    })

    const service = response.find((item:any) => {return item.id == id})
    if(service == undefined){
        return new Error()
    } else {
        return service
    }
}