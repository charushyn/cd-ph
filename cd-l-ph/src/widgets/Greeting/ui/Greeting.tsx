'use client'

import { Title, ScrollToComponent } from "@/shared/ui/index"

import {ReactTyped} from 'react-typed'

import {useTranslations} from 'next-intl';

import React from "react";



export default function Greeting(){
        const t = useTranslations('greeting');

        
        return(
            <div className={`w-full relative h-svh font-OpenSans z-[-2]`} id="greeting">
                <div className="fadeinn w-full h-svh z-[-1]">
                    <img className='h-full w-full' src="https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.850businessmagazine.com/content/uploads/2019/10/iStock-694415714-1024x688.jpg" id="f1" />
                    <img className='h-full w-full' src="https://img.freepik.com/free-photo/people-business-meeting-high-angle_23-2148911819.jpg" id="f2" />
                </div>
                <div className='overlay z-[0]'></div>
                <div className={`flex flex-col justify-around h-svh z-[1] relative px-4 pt-[60px] m-l:pt-[100px] t-l:px-8`}>
                    <div className="flex flex-col gap-6 t-s:gap-10">
                        <ReactTyped
                        className=" text-white m-l:text-xl t-s:text-2xl t-m:text-3xl t-x:text-4xl d-s:text-5xl"
                        strings={[
                            t("welcome")
                        ]}
                        typeSpeed={50}
                        backSpeed={50}
                        loop
                        ></ReactTyped>
                        <div className=' max-w-[60%] text-white text-xs m-l:text-sm t-s:text-xl t-m:max-w-[50%] leading-5 t-x:text-2xl d-s:text-lg d-s:max-w-[33%]'>
                            {t("mission")}
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 t-l:gap-5'>
                        <ScrollToComponent text={t("nav.contact")} isArrowIconNeeded={false} className=" bg-[none] text-white decoration-[0.5px] underline p-0 t-s:decoration-[1px] t-l:p-0 t-x:p-0 cursor-pointer" arrowClassName="" hrefElem="footer"></ScrollToComponent>
                        <ScrollToComponent text={t("nav.services")} isArrowIconNeeded={false} className=" bg-[none] text-white decoration-[0.5px]  underline p-0 t-s:decoration-[1px] t-l:p-0 t-x:p-0 cursor-pointer" arrowClassName="" hrefElem="services"></ScrollToComponent>
                        <ScrollToComponent text={t("nav.about")} isArrowIconNeeded={false} className=" bg-[none] text-white decoration-[0.5px] underline p-0 t-s:decoration-[1px] t-l:p-0 t-x:p-0 cursor-pointer" arrowClassName="" hrefElem="whywe"></ScrollToComponent>
                    </div>
                    <a href='#services' className="absolute bottom-5 right-0 left-0 w-6 h-6 mx-auto t-s:w-8 t-s:h-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute bottom-5 right-0 left-0 w-6 h-6 animate-bounce text-white t-s:w-8 t-s:h-8">  
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                        </svg>
                    </a>
                    
                </div>
                <style jsx>{
                            `
                            .overlay {    
                                width: 100%;
                                height: 100%;
                                background-size: cover;
                                position: absolute;
                                top: 0px;
                                right: 0px;
                                bottom: 0px;
                                left: 0px;
                                
                                background-color: rgba(0,0,0,0.60);
                            }
                            .fadeinn {
                                position: absolute;
                                top: 0px;
                                left: 0px;
                                right: 0px;
                                bottom: 0px;
                            }
                            .fadeinn img {
                                opacity: 0;
                                position: absolute;
                                top: 0px;
                                left: 0px;
                                right: 0px;
                                bottom: 0px;
                                object-fit: cover;
                                -webkit-animation-name: fade;
                                -webkit-animation-iteration-count: infinite;
                                -webkit-animation-duration: 8s;
                                animation-name: fade;
                                animation-iteration-count: infinite;
                                animation-duration: 8s;
                            }
                            @keyframes fade {
                                0% {opacity: 0;}
                                20% {opacity: 1;}
                                33% {opacity: 1;}
                                53% {opacity: 0.5;}
                                100% {opacity: 0;}
                            }
                            #f2 {
                                animation-delay: 4s;
                            }
                            `
                        }</style>
        </div>
    )
}