'use client'

import { Title, ScrollToComponent } from "@/shared/ui/index"

import { useTranslations } from "next-intl"
import { useDispatch, useSelector } from "react-redux"

import React, { useEffect, useState } from "react"
import { setActiveID } from "@/shared/utils/redux/service/service"
import {Button} from "@/shared/ui/index"

import getImg from "@/shared/utils/img/getImg"
import { BarLoader } from "@/entities"

import Spinner from 'react-spinners/MoonLoader'

const TestService = (
    {
        title,
        description, 
        id,
        bgPath,
        svgPath,
        bool
    } : {
        title: string, 
        description: string, 
        id: number,
        bgPath: string,
        svgPath: string,
        bool: boolean
    }) => {

        const [iconUrl, setIconUrl] = useState('')
        const [bgPhotoUrl, setBgPhotoUrl] = useState('')

        useEffect(() => {
            new Promise(async (resolve, reject) => {
                let base64Bg = Buffer.from(((await getImg(bgPath)).data),
                "binary" ).toString("base64");
                let bg =`data:image/png;base64,${base64Bg}`

                setBgPhotoUrl(bg)

            })

            new Promise(async (resolve, reject) => {
                let base64Svg = Buffer.from(((await getImg(svgPath)).data),
                "binary" ).toString("base64");
                let svg =`data:image/png;base64,${base64Svg}`

                setIconUrl(svg)

            })
                
        
                // let base64Icon = Buffer.from(((await getImg(service.svg)).data),
                //     "binary" ).toString("base64");
            }, [])
        

       
        
    
        
        // let svg = `data:image/png;base64,${base64Icon}`        
        const t = useTranslations('services')
        const active = id == useSelector((state: any) => state.serviceReducer.activeServiceID)
        const dispatch = useDispatch()

        useEffect(() => {
            dispatch(setActiveID(id))
        }, [])
    return(
        <div style={{
                backgroundImage: `url(${bgPhotoUrl})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                transition: 'all 0.8s ease',
            }} className={`w-full relative ${active ? 'min-h-[300px] d-s:w-full' : 'min-h-[70px] d-s:w-[60px]'} d-s:min-h-[90svh]`}
                onClick={() => dispatch(setActiveID(id))}
                onMouseOver={() => dispatch(setActiveID(id))}
            >
                {/* overlay with 0.5 bg black, make photo more dark*/}
                <div className="absolute z-[1] bg-black opacity-50 w-full h-full"></div>
                {/* overlay in load state img */}
                {
                    bgPhotoUrl.length === 0 && 
                    <div className="absolute z-[2] w-full h-full flex justify-end px-4 items-center">
                    <div className="flex flex-row gap-1">
                        <BarLoader delay={0} className=""></BarLoader>
                        <BarLoader delay={0.1} className=""></BarLoader>
                        <BarLoader delay={0.2} className=""></BarLoader>
                    </div>
                    </div>
                    }
                {/* default info */}
                <div className='relative flex flex-row h-[70px] m-l:h-[90px] w-full z-[2] justify-between p-4 items-center d-s:hidden'>
                    <Title text={title} className="text-white uppercase"></Title>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                        className={`d-s:hidden w-6 h-6 t-m:w-8 t-m:h-8 text-white transition-all duration-200 ${active ? 'rotate-180' : 'rotate-0'}`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                {/* default info, but for desktops */}
                <div className={`relative z-[2] flex justify-center transition-opacity duration-1000 ${active ? 'd-s:opacity-0' : 'd-s:opacity-100'}`}>
                       <img src={iconUrl} className={`w-6 h-6 t-m:w-8 t-m:h-8 text-white hidden mt-8 ${!active && 'd-s:flex'}`}></img>
                </div>
                {/* info with details */}
                <div className={`relative transition-opacity duration-1000 delay-[0.8s] d-s:pt-[80px] d-s:px-8 ${active ? 'opacity-100 p-4' : 'opacity-0 p-0'} z-[2]`}>
                    <p className={`text-white uppercase hidden text-lg t-s:text-xl t-m:text-2xl font-Acrom_Light ${active && 'd-s:flex'}`}>{active ? title : ''}</p>
                    <Title text={active ? description : ''} className={`text-white d-s:w-[70%] d-s:pt-8`}></Title>
                </div>
                {/* id */}
                {bool && <p className={`absolute bottom-4 z-[2] opacity-0 hover:opacity-100 px-4 left-4 text-white ${active ? 'inline' : 'hidden'}`}>№ {id}</p>}
                {/* button */}
                <div className={`absolute bottom-8 right-8 transition-opacity duration-1000 delay-[0.8s] ${active ? 'opacity-100' : 'opacity-0'} z-[2]`}>
                    <ScrollToComponent hrefElem={'feedbackform'} className={` text-white ${active ? 'flex' : 'hidden'} `} isArrowIconNeeded={true} isHoverEffect={true} text={t('button')}></ScrollToComponent>
                </div>
        </div>
    )
    
}

export default TestService;