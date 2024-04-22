'use client'


import { Title, ScrollToComponent } from "@/shared/ui/index"

import React from 'react'

import {ReactTyped} from 'react-typed'

export default function Greeting(){
        return(
            <div className={`w-full relative min-h-svh h-fit`} id="greeting">
                <video 
                    className="absolute z-[-1] top-0 left-0 right-0 bottom-0 w-full videoBg h-svh object-cover"
                    muted
                    autoPlay
                    loop
                    preload="auto"
                    src={require("../video/stock-video-team-working.mp4")}

                    />
                <div className="overlay"></div>
                <div className={`flex flex-col justify-around min-h-svh z-[1] relative px-4 pt-[60px] m-l:pt-[100px] t-l:px-8`}>
                    <div className="flex flex-col gap-6 t-s:gap-10">
                        <ReactTyped
                        className=" text-white m-l:text-xl t-s:text-2xl t-m:text-3xl t-x:text-4xl d-s:text-5xl"
                        strings={[
                            "Hello!",
                            "Privet!",
                            "Bonjour!",
                        ]}
                        typeSpeed={50}
                        backSpeed={200}
                        loop
                        ></ReactTyped>
                        <div className='max-w-[60%] text-white text-xs m-l:text-sm t-s:text-xl t-m:max-w-[50%] t-x:text-2xl d-s:text-lg d-s:max-w-[33%]'>
                            We are <span className="text-xm">The Best Result</span>, we are making good quality product
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 t-l:gap-5'>
                        <ScrollToComponent text="contact" isArrowIconNeeded={false} className=" bg-[none] text-white decoration-[0.5px] underline p-0 t-s:decoration-[1px] t-l:p-0 t-x:p-0 cursor-pointer" arrowClassName="" hrefElem="footer"></ScrollToComponent>
                        <ScrollToComponent text='services' isArrowIconNeeded={false} className=" bg-[none] text-white decoration-[0.5px]  underline p-0 t-s:decoration-[1px] t-l:p-0 t-x:p-0 cursor-pointer" arrowClassName="" hrefElem="footer"></ScrollToComponent>
                        <ScrollToComponent text='about' isArrowIconNeeded={false} className=" bg-[none] text-white decoration-[0.5px] underline p-0 t-s:decoration-[1px] t-l:p-0 t-x:p-0 cursor-pointer" arrowClassName="" hrefElem="footer"></ScrollToComponent>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute bottom-5 right-0 left-0 w-6 h-6 animate-bounce text-white mx-auto t-s:w-8 t-s:h-8">  
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
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
                            `
                        }</style>
        </div>
    )
}