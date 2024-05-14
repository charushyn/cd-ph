'use client'


import { useInView } from "react-intersection-observer"

import { FAQBlock } from "@/features/index"
import { Title } from "@/shared/ui/index"

import blocks from "../api/data"

import { useTranslations } from "next-intl"


const FAQ = () => {
    const t = useTranslations("faq")
    const { ref: faqRef, inView: faqIsVisible } = useInView({triggerOnce: true})
    return(
        <div ref={faqRef} className='font-OpenSans flex flex-col px-4 pb-4 t-l:px-8' id="faq">
            <Title text={t("title")} className="text-sm bg-white h-[70px] flex items-center"></Title>
            <div className="gap-y-8 flex flex-col t-m:items-center my-10">
            {/* {blocks.map((item: any) => {
                return(
                    <FAQBlock key={item.title} title={item.title} description={item.description}></FAQBlock>
                )
            })} */}
            <FAQBlock title={t("0.title")} description={t("0.description")}></FAQBlock>
            <FAQBlock title={t("1.title")} description={t("1.description")}></FAQBlock>
            <FAQBlock title={t("2.title")} description={t("2.description")}></FAQBlock>
            <FAQBlock title={t("3.title")} description={t("3.description")}></FAQBlock>
            <FAQBlock title={t("4.title")} description={t("4.description")}></FAQBlock>
            </div>
        </div>
    )
}

export default FAQ;