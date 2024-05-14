'use client'

import { Title } from "@/shared/ui/index"
import { iconFinder } from "../../../../public/helpers/index"
import iconName from "../../../../public/helpers/icons/types/iconName"

import { useInView } from "react-intersection-observer";

export default function WhyWeBlock({iconName, title, description} : {iconName: iconName, title: string, description: string}){
    const {ref: faqRef, inView: isBlockVisible } = useInView({triggerOnce: true})
    return(
        <div ref={faqRef} className={` flex flex-col max-w-[80%] m-m:max-w-[70%] t-s:w-[48%] t-l:w-[45%] t-x:w-[30%] items-center gap-2 opacity-0 relative bg-white border-[1px] rounded-3xl p-4 t-l:p-8 ${isBlockVisible ? 'animateOpacityItem' : ''}`}>
            {iconFinder(iconName, 'h-[80px] w-[80px] t-x:h-[100px] t-x:w-[100px]')}
            <div className="flex flex-col d-s:just items-center gap-4">
                <Title className="d-s:text-lg" text={title}></Title>
                <p className="text-center text-black text-xs t-s:text-base t-m:text-sm">{description}</p>
            </div>
        </div>
    )
}