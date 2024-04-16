'use client'

import { Title, ScrollToComponent } from "@/shared/ui/index"

import React from 'react'
import ReactPlayer from 'react-player'

import {ReactTyped} from 'react-typed'

export default function Greeting(){
        return(
            <div className={`w-full relative z-[100] min-h-[90svh] h-fit`}>
                <div className={`serviceC relative overflow-hidden flex flex-col justify-around top-0 bottom-0 left-0 right-0 min-h-[90svh] p-4`}>
                    <div className="flex flex-col gap-6 relative">
                        <ReactTyped
                        className="text-xl text-white relative"
                        strings={[
                            "Hello!",
                            "Privet!",
                            "Bonjour!",
                        ]}
                        typeSpeed={50}
                        backSpeed={200}
                        loop
                        ></ReactTyped>
                        <div className='max-w-[80%] text-white relative text-xs'>
                            We are <span className="text-xm">The Best Result</span>, we are making good quality product
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <ScrollToComponent text="contact" isArrowIconNeeded={false} className=" bg-[none] text-white decoration-[0.5px] underline p-0" isHoverEffectDisabled={true} arrowClassName="" hrefElem="footer"></ScrollToComponent>
                        <ScrollToComponent text='services' isArrowIconNeeded={false} className=" bg-[none] text-white decoration-[0.5px] underline p-0" isHoverEffectDisabled={true} arrowClassName="" hrefElem="footer"></ScrollToComponent>
                        <ScrollToComponent text='about' isArrowIconNeeded={false} className=" bg-[none] text-white decoration-[0.5px] underline p-0" isHoverEffectDisabled={true} arrowClassName="" hrefElem="footer"></ScrollToComponent>
                    </div>
                    <style jsx>{
                            `
                            .serviceC {
                                background-image: url('https://www.freelogoservices.com/blog/wp-content/uploads/laptop-header-picture-id910806154.jpg');
                                background-size: cover;
                                background-repeat: no-repeat;
                                background-position: center;
                            }
                            .serviceC::before {    
                                content: "";
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
        </div>
    )
}