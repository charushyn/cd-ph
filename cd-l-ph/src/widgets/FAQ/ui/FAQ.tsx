'use client'


import { useInView } from "react-intersection-observer"

import { FAQBlock } from "@/features/index"
import { Title } from "@/shared/ui/index"

import blocks from "../api/data"

const FAQ = () => {
    const { ref: faqRef, inView: faqIsVisible } = useInView({triggerOnce: true})
    return(
        <div ref={faqRef} className='flex flex-col px-4 mt-[20px] gap-10'>
            <div className='flex flex-row justify-center relative items-center gap-3 h-[100px]'>
                <Title text="Questions" className=""></Title>
                <div className={`bg-black w-[1px] h-full`}></div>
                <Title text="Answers" className=""></Title>
            </div>
            <div className="gap-y-8 t-s:flex-wrap t-s:flex-row flex flex-col t-s:justify-around">
            {blocks.map((item: any) => {
                return(
                    <FAQBlock key={item.title} title={item.title} photoUrl={item.photoUrl}></FAQBlock>
                )
            })}
            </div>
        </div>
    )
}

export default FAQ;