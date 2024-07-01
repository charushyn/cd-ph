'use client'

import { useState, useEffect } from "react"
import getImg from "@/shared/utils/img/getImg"

export default function SocialMedia({iconUrl, src, text} : {iconUrl: string, src: string, text: string}){
    const [icon, setIcon] = useState('')


    useEffect(() => {
        new Promise(async () => {
            setIcon((await getImg(iconUrl)).data)
        })
    }, [])


    return(
        <div className='flex flex-row items-center gap-2 cursor-pointer relative'>
            <a className="absolute top-0 bottom-0 left-0 right-0 w-full h-full" href={src} target="_blank" rel="noopener noreferrer"></a>
            {icon.length === 0 ? '' :  <img src={icon} className='w-6 h-6' alt=""></img>}
            <p className='underline text-xs decoration-1 t-s:text-sm t-m:text-base font-Acrom_Light'>{text}</p>
        </div>       
    )
}