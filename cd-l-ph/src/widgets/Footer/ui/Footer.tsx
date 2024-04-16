'use client'

import React from "react"

import { Link, ScrollToComponent, Title } from "@/shared/ui/index"
import { TitleWithSbtitle } from "@/entities/index"

import { iconFinder } from "../../../../public/helpers"


import dynamic from "next/dynamic"

export default function Footer(){
    const Map = dynamic(() => import("@/shared/ui/LeafletMap/ui/LeafletMap"), { ssr: false });

    return(
        <footer className='flex flex-col bg-black text-white gap-4 h-fit p-4' id='footer'>
            <ScrollToComponent text={'повернутись нагору'} arrowClassName=" rotate-[-90deg]" hrefElem="top" isArrowIconNeeded={true} className="w-full p-0 items-center my-2 justify-center" isHoverEffectDisabled={true}></ScrollToComponent>
            <div className='flex flex-col gap-4 h-fit'>
                <div className='flex flex-col gap-2'>
                    <Map></Map>
                    <a target="_blank" href="https://www.google.com/maps/place/The+Best+Result+-+Biuro+Rachunkowe+Ksi%C4%99gowe+Leasing+Ubezpieczenia+Warszawa+%D0%91%D1%83%D1%85%D0%B3%D0%B0%D0%BB%D1%82%D0%B5%D1%80%D1%96%D1%8F+%D0%A1%D1%82%D1%80%D0%B0%D1%85%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F+%D0%9B%D1%96%D0%B7%D0%B8%D0%BD%D0%B3+%D0%86%D0%BF%D0%BE%D1%82%D0%B5%D0%BA%D0%B0+%D0%9F%D0%BE%D0%BB%D1%8C%D1%89%D0%B0/@52.2700317,21.0449526,17z/data=!3m1!4b1!4m6!3m5!1s0x471ecd3b7061cd29:0x282dcd5a6166385!8m2!3d52.2700284!4d21.0475275!16s%2Fg%2F11vwn_01wk?hl=pl-PL&entry=ttu" className='flex flex-row gap-1 items-center cursor-pointer mt-2'>
                        <Title className='text-white underline' text="Ks. Piotra Skargi 56, 03-516 Warszawa, Targówek"></Title>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </a>
                </div>
                <div className="flex flex-col gap-4 t-s:flex-row t-s:flex-wrap t-s:justify-between t-s:mt-10">
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row items-center gap-2'>
                            {iconFinder('small-gold-logo')}
                            <p className='font-Acrom_Bold text-xl'>CD Phinance</p>
                        </div>
                        <TitleWithSbtitle titleText="Title" subtitleText="Subtitle"></TitleWithSbtitle>
                        <TitleWithSbtitle titleText="Title" subtitleText="Subtitle"></TitleWithSbtitle>
                        <TitleWithSbtitle titleText="Title" subtitleText="Subtitle"></TitleWithSbtitle>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Title text="Social Media" className="text-white"></Title>
                        <div className='flex flex-row gap-2 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                            </svg>
                            <p className='underline'>link/link</p>
                        </div>
                        <div className='flex flex-row gap-2 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                            </svg>
                            <p className='underline'>link/link</p>
                        </div>
                        <div className='flex flex-row gap-2 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                            </svg>
                            <p className='underline'>link/link</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Title className='text-white' text="Угоди з сайтом"></Title>
                        <Link isArrowNeeded={true} text={'some text'} href="/" className="w-full p-0 underline"></Link>
                        <Link isArrowNeeded={true} text={'some text'} href="/" className="w-full p-0 underline"></Link>
                    </div>
                </div>
                
            </div>

        </footer>
    )
}