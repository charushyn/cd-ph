'use server'

export default async function getMapData(){
    const response = await fetch(`${process.env.URL_STATIC_INFORMATION_SECRET}/get-other`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(data => {
        if(data.ok){
            return data.json()
        }
        throw new Error()
    }).catch(err => {
        return err
    })

    return response.data.map
}