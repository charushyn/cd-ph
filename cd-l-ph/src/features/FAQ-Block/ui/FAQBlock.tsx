'use client'

import { Title } from "@/shared/ui/index";

import { ImageSeeMore } from "@/entities/index";

import { useInView } from "react-intersection-observer";

const FAQBlock = ({photoUrl, title} : {photoUrl:string, title:string}) => {
    const {ref: faqRef, inView: isBlockVisible } = useInView({triggerOnce: true})
    return(
        <div ref={faqRef} className={`flex flex-col h-fit gap-2 font-Acrom_Light opacity-0 t-s:w-[45%] ${isBlockVisible ? 'animateOpacityItem' : ''}`}>
            <ImageSeeMore className="" linkSeeMore="/" photoUrl={photoUrl}></ImageSeeMore>
            <Title text={title} className=" font-bold"></Title>
        </div>
    )
}

export default FAQBlock;