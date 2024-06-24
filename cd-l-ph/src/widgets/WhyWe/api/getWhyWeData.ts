'use server'

export default async function getWhyWeData(locale: string){
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
    return response
}