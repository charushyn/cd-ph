'use server'

export default async function getStaticData(locale: string, reqdata: string, id?:number){
    const response = await fetch(`${process.env.URL_STATIC_INFORMATION_SECRET}/get-${reqdata}`, {
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

    if(id || id === 0){
        if(response[id] == undefined){
            return new Error()
        } else {
            return response[id]
        }
    } else {
        return response
    }
    
}