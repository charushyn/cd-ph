'use client'

import React from "react"

import languages from "../api/data"
import { Title } from "@/shared/ui"

import { useSelector, useDispatch } from "react-redux"
import { toggleVisibilityPopupLanguage,changeCurrentLanguage } from "@/shared/utils/index"
import Image from "next/image"

const PopupLanguage = () => {
        const stateVisibility = useSelector((state: any) => state.languageReducer.isPopupLanguageShow)
        const currentLanguage = useSelector((state:any) => state.languageReducer.currentLanguage)
        const dispatch = useDispatch()
        
        return(
            <div className={`fixed flex flex-col z-[50] top-0 right-0 w-fit h-fit p-4 gap-4 bg-[#D3BE5F] ${!stateVisibility && 'hidden'}`}>
                    <div className='flex flex-row justify-between gap-4'>
                        <Title text="Choose Language" className=""></Title>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 t-s:w-8 t-s:h-8" onClick={() => dispatch(toggleVisibilityPopupLanguage())}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                <div className='flex flex-col gap-2'>
                    {
                        languages.map((item) => {
                            return(
                                <div key={item} className={`flex flex-row gap-1 cursor-pointer font-Acrom_Regular`} onClick={() => {
                                    dispatch(changeCurrentLanguage(item))
                                    dispatch(toggleVisibilityPopupLanguage())
                                    }}>
                                    <Image width={30} height={20} alt="" className=' object-cover border-[1px]' src={item.flagUrl}></Image>
                                    <Title text={item.fullName} className={item.id === currentLanguage.id ? 'underline' : ''}></Title>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    )
}

export default PopupLanguage;