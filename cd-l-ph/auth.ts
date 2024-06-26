import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies"

export default async function isAuthValid(token: RequestCookie | undefined){
    const response = await fetch(`https://backend.cdfinance.pl/verify`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
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