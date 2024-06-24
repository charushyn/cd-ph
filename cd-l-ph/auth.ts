import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies"

export default async function isAuthValid(token: RequestCookie | undefined){
    const response = await fetch(`http://localhost:1488/verify`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            mode: 'cors',
        },
        body: JSON.stringify({token: token})
    }).then(data => {
        if(data.ok){
            return data.json()
        }
        throw new Error()
    }).catch(err => {
        throw new Error()
    })
    return response
}