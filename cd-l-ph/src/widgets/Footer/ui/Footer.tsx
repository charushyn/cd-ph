'use client'

import React from "react"

import { Link } from "@/shared/ui/index"
import LinkToPage from 'next/link'

import { iconFinder } from "../../../../public/helpers"


export default function Footer(){

    return(
        <footer className='flex flex-col bg-black text-white gap-4 h-fit p-4'>
            {/* <MyMap></MyMap> */}
            <Link text={'some text'} href="/" className="w-full"></Link>
            <div className='flex flex-col gap-4 h-fit'>
                <div className='flex flex-col gap-2'>
                    {/* <LeafletMap></LeafletMap> */}
                    <div className='flex flex-row gap-1 items-center cursor-pointer'>
                        <p className='underline font-Acrom_Regular'>Al. Ujazdowskie 11, 00-950 Warszawa</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-row items-center gap-2'>
                        {iconFinder('small-gold-logo')}
                        <p className='font-Acrom_Bold text-xl'>CD Phinance</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-Acrom_Regular'>Title</p>
                        <p className='font-Acrom_Light'>Subtitle</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-Acrom_Regular'>Title</p>
                        <p className='font-Acrom_Light'>Subtitle</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-Acrom_Regular'>Title</p>
                        <p className='font-Acrom_Light'>Subtitle</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='font-Acrom_Bold'>Social Media</p>
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
                <div className='flex flex-col gap-2'>
                    <p className='font-Acrom_Bold'>Угоди з сайтом</p>
                    <Link text={'some text'} href="/" className="w-full"></Link>
                    <Link text={'some text'} href="/" className="w-full"></Link>
                </div>
            </div>

        </footer>
    )
}