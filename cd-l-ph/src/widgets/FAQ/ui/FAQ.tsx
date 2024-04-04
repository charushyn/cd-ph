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
                <div className={`bg-black w-[1px] h-full absolute rotate-45 top-0 bottom-0`}></div>
                <Title text="Answers" className=""></Title>
            </div>
            {blocks.map((item: any) => {
                return(
                    <FAQBlock title={item.title} photoUrl={item.photoUrl}></FAQBlock>
                )
            })}
        </div>
    )
}

export default FAQ;