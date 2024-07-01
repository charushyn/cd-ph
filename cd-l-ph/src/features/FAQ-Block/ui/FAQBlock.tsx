'use client'

import { Title } from "@/shared/ui/index";
import {ScrollToComponent} from "@/shared/ui/index";

import { useInView } from "react-intersection-observer";
import React from "react";

import { useTranslations } from "next-intl";

const FAQBlock = ({description, title, active, setActive, bool, id, button} : {description:string, title:string, active: boolean, setActive: any, bool: boolean, id: number, button:string}) => {
    const t = useTranslations("faq")
         const {ref: faqRef, inView: isBlockVisible } = useInView({triggerOnce: true})
        return(
            <div className={`w-full flex flex-col h-fit t-m:max-w-[80%] t-x:max-w-[60%] d-s:max-w-[50%]`} ref={faqRef} onClick={() => {
                setActive()
                }}>
                <div className={`FAQBlock ${active ? ` min-h-[150px]` : `min-h-[50px]`} flex flex-col`}>
                    <div className={` flex flex-row justify-between h-fit mb-4 relative`}>
                        <div className={`text-black text-xs t-s:text-sm t-m:text-base t-x:text-lg max-w-[80%]`}>{title}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`text-black w-6 h-6 t-m:w-8 t-m:h-8 transition-all duration-200 ${active ? 'rotate-180' : 'rotate-0'}`}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div className={`info ${active ? '' : 'hidden'} relative h-fit mt-4 flex flex-col gap-4 d-s:gap-6`}>
                        <div className='text-xs t-s:text-sm t-m:text-base leading-5 t-x:text-lg d-s:w-[80%] text-gray-500'>{description}</div>
                        {bool && <p className={'text-black'}>№ {id}</p>}
                        <div className='flex justify-end mt-10'>
                            <ScrollToComponent isHoverEffect={true} hrefElem='feedbackform' className=" bottom-4 right-4 text-white" onClick={(e: any) => e.stopPropagation()} isArrowIconNeeded={true} text={button}></ScrollToComponent>
                        </div>
                    </div>
                    
                    <hr></hr>
                    <style jsx>{
                            `
                            .FAQBlock {
                                transition: min-height 0.8s ease;
                            }
                            .info{
                                animation: fadeIn 1s;
                            }
                            `
                        }</style>
                </div>
        </div>
        )
    }

export default FAQBlock;