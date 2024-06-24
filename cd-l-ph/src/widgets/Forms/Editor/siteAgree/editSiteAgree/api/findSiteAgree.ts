'use server'

export default async function findSiteAgree(locale: string, id: number){
    const response = await fetch(`${process.env.URL_STATIC_INFORMATION_SECRET}/get-footer`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
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

    const data = response.find((item:any) => {return item.id === 2})
    const siteAgrees = data.data.find((item:any) => { return item.index === id})
    if(siteAgrees == undefined){
        return new Error()
    } else {
        return siteAgrees
    }
}