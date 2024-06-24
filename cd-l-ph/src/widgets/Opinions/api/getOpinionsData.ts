export default async function getOpinionsData(locale: string){
    const response = await fetch(`http://localhost:1488/get-opinions`, {
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
        console.log(err)
        return err
    })
    return response
}