'use server'

export default async function getImg(path: string){
    const response = await fetch(`${process.env.URL_STATIC_INFORMATION_SECRET}/img`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: path})
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