'use server'

import { cookies } from "next/headers"

async function deleteCookie(){
    return cookies().delete('refreshToken')
}

async function isToken(){
    const cookieStore = cookies()
    const token = cookieStore.get('refreshToken')?.value
    return token ? true : false
}

export {deleteCookie, isToken}