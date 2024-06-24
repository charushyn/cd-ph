export default async function editMap(values: {adress: string, link: string, X:string, Y: string}){
    const body = new FormData()

    body.append('adress', values.adress)
    body.append('link', values.link)
    body.append('X', values.X)
    body.append('Y', values.Y)

    
    console.log(body)
    const response: any = await fetch(`http://localhost:1488/edit-map`, {
        method: 'POST',
        mode: 'cors',
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