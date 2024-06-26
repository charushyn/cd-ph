'use client'

import { Title, ScrollToComponent } from "@/shared/ui/index"

import React from "react";
import Typed from "@/features/Typed/ui/Typed";
import getImg from "@/shared/utils/img/getImg";
import { Loading } from "@/build/Providers";

import { useEffect, useState } from "react";


export default function Greeting(data: any){

        const [firstImg, setFirstImg] = useState('')
        const [secondImg, setSecondImg] = useState('')

        useEffect(() => {
            new Promise(async (resolve, reject) => {
                setFirstImg((await getImg(data.data.firstImg)).data)
            })
            }, [])

            useEffect(() => {
                new Promise(async (resolve, reject) => {
                    setSecondImg((await getImg(data.data.secondImg)).data)
                })

            }, [])
        
        return(
            <div className={`w-full relative h-svh font-OpenSans z-[0]`} id="greeting">
                <div className="fadeinn w-full h-svh z-[-1]">
                    <img className='h-full w-full' src={firstImg} id="f1" />
                    <img className='h-full w-full' src={secondImg} id="f2" />
                </div>
                <div className='overlay z-[0]'></div>
                <div className={`flex flex-col justify-around h-svh z-[1] relative px-4 pt-[60px] m-l:pt-[100px] t-l:px-8`}>
                    <div className="flex flex-col gap-6 t-s:gap-10">
                            {firstImg.length === 0 ? <p className="text-white m-l:text-xl t-s:text-2xl t-m:text-3xl t-x:text-4xl d-s:text-5xl">{data.data.welcome}</p> : <Typed text={data.data.welcome} className="text-white m-l:text-xl t-s:text-2xl t-m:text-3xl t-x:text-4xl d-s:text-5xl"></Typed>}
                        <div className=' max-w-[60%] text-white text-xs m-l:text-sm t-s:text-xl t-m:max-w-[50%] leading-5 t-x:text-2xl d-s:text-lg d-s:max-w-[33%]'>
                            {data.data.mission}
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 t-l:gap-5'>
                        {
                            data.data.nav.map((item: any) => {
                                return(
                                    <ScrollToComponent text={item.title} isArrowIconNeeded={false} className=" bg-[none] text-white decoration-[0.5px] underline p-0 t-s:decoration-[1px] t-l:p-0 t-x:p-0 cursor-pointer" arrowClassName="" hrefElem={item.href}></ScrollToComponent>
                                )
                            })
                        }
                    </div>
                    <a href='#services' className="absolute bottom-5 right-0 left-0 w-6 h-6 mx-auto t-s:w-8 t-s:h-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute bottom-5 right-0 left-0 w-6 h-6 animate-bounce text-white t-s:w-8 t-s:h-8">  
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                        </svg>
                    </a>
                </div>
        </div>
    )
}