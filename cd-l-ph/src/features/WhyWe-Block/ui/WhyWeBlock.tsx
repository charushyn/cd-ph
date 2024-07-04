import { Title } from "@/shared/ui/index"
import { iconFinder } from "../../../../public/helpers/index"
import iconName from "../../../../public/helpers/icons/types/iconName"
import { cookies } from "next/headers"

import { useInView } from "react-intersection-observer";

import { useState, useEffect } from "react"

import getImg from "@/shared/utils/img/getImg"

export default function WhyWeBlock({iconPath, title, description, bool, id} : {iconPath: string, title: string, description: string, bool: boolean, id: number}){
    
    return(
        <div className={`flex flex-col max-w-[80%] m-m:max-w-[70%] t-s:w-[48%] t-l:w-[45%] t-x:w-[30%] items-center gap-2 relative bg-white border-[1px] rounded-3xl p-4 t-l:p-8`}>
            <img src={getImg(iconPath)} className="h-[80px] w-[80px] t-x:h-[100px] t-x:w-[100px] bg-white"></img>
            <div className="flex flex-col d-s:just items-center gap-4">
                <Title className="d-s:text-lg" text={title}></Title>
                <p className="text-center text-black text-xs t-s:text-base t-m:text-sm">{description}</p>
            </div>
            {bool && <p className={`absolute bottom-4 z-[2] px-4 left-4 text-black`}>№ {id}</p>}
        </div>
    )
}