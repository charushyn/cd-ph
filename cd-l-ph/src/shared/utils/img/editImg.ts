export default async function editImg(path: string, file: File){
    const body = new FormData()

    body.append('img', file)
    body.append('path', path)

    const response = await fetch(`http://localhost:1488/edit-img`, {
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