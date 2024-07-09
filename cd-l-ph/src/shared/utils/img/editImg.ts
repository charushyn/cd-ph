import reqUrl from "../urls/reqUrlBack"

export default async function editImg(file: File, name: string){
    const body = new FormData()

    body.append('img', file)

    const response = await fetch(`${reqUrl}/edit-${name}`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body
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