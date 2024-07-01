'use client'


import { useInView } from "react-intersection-observer"

import { FAQBlock } from "@/features/index"
import { Title } from "@/shared/ui/index"

import blocks from "../api/data"

import { useTranslations } from "next-intl"

import React from "react"


const FAQ = ({data, title, bool, button} : {data: any, bool: boolean, title:string, button: string}) => {

    const t = useTranslations("faq")
    const { ref: faqRef, inView: faqIsVisible } = useInView({triggerOnce: true})

    const [active, setActive] = React.useState('')

    return(
        <div ref={faqRef} className='font-OpenSans flex flex-col px-4 pb-4 t-l:px-8' id="faq">
            <Title text={title} className="text-sm bg-white h-[70px] flex items-center"></Title>
            <div className="gap-y-8 flex flex-col t-m:items-center my-10">
            {
                !data.error ? data.map((item: any) => {
                    return(
                        <FAQBlock button={button} id={item.id} bool={bool} title={item.title} description={item.description} active={item.title === active} setActive={() => setActive(item.title)}></FAQBlock>
                    )
                }) : ''
            }
            </div>
        </div>
    )
}

export default FAQ;