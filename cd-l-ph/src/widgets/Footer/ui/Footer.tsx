'use server'

import { Link, ScrollToComponent, Title, Subtitle } from "@/shared/ui/index"
import { TitleWithSbtitle } from "@/entities/index"

import { iconFinder } from "../../../../public/helpers"

import { useTranslations } from "next-intl"

import dynamic from 'next/dynamic'

import { getStaticData } from "@/shared/utils"
import { getLocale } from "next-intl/server"
import getImg from "@/shared/utils/img/getImg"
import SocialMedia from "@/features/SocialMedia/ui/SocialMedia"
const DynamicMap = dynamic(() => import('@/shared/ui/LeafletMap/ui/LeafletMap'), {
  ssr: false
});



export default async function Footer({logo, map} : {logo:string, map:any}){
    const locale = await getLocale()
    const data = await getStaticData(locale, 'footer')


    const idSocialMedia = data.findIndex((item:any) => item.id === 1)
    const idSchedule = data.findIndex((item: any) => item.id === 0)
    const idSiteAgree = data.findIndex((item: any) => item.id === 2) 

    
    
    return(
        <footer className='font-OpenSans flex flex-col text-xs bg-black text-white gap-4 h-fit p-4' id='footer'>
            <ScrollToComponent text={''} arrowClassName=" rotate-[-90deg]" hrefElem="top" isArrowIconNeeded={true} className="w-full p-0 items-center my-2 justify-center" isHoverEffect={false}></ScrollToComponent>
            <div className="w-90svh h-50svh mx-auto">
                <DynamicMap coordination={map.coordination}/>
            </div>
            <div className='flex flex-col gap-4 h-fit'>
                <div className='flex flex-col gap-2 m-l:px-[5svh]'>
                    <a target="_blank" href={map.link} className='flex flex-row gap-1 items-center cursor-pointer mt-2'>
                        <Title className='text-white underline' text={map.adress}></Title>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </a>
                </div>
                <div className="flex flex-col gap-4 t-s:flex-row t-s:flex-wrap t-s:justify-between t-s:mt-10 m-l:px-[5svh]">
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row items-center gap-2'>
                            
                            <img src={getImg(logo)} className={'w-fit h-[20px] t-s:h-[20px]'} alt=""></img>
                            <Title className='text-white' text="CD Phinance"></Title>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Title className="text-white" text={data[idSchedule].title}></Title>
                            {
                                data[idSchedule]?.data.length > 0 ? data[idSchedule].data.map((item: any) => {
                                    return (
                                        <div className="w-fit flex flex-row">
                                            <Subtitle className="text-white" text={`${item.day}: ${item.isOpen ? `${item.time.from}-${item.time.to}` : item.closed}`}></Subtitle>
                                        </div>
                                    )
                                }) : ''
                            }
                        </div>

                    </div>
                    <div className='flex flex-col gap-4'>
                        <Title text={data[idSocialMedia].title} className="text-white"></Title>
                        {
                            data[idSocialMedia]?.data.length > 0 ? data[idSocialMedia].data.map((item: any) => {
                                return(
                                    <SocialMedia text={item.text} src={item.src} iconUrl={item.svg}></SocialMedia>
                                )
                            }) : ''
                        }
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Title className='text-white' text={data[idSiteAgree].title}></Title>
                        {
                            data[idSiteAgree]?.data.length > 0 ?
                            data[idSiteAgree].data.map((item: any) => {
                                return(
                                    <Link isArrowIconNeeded={true} text={item.text} href={item.src} className="w-full m-s:p-0 m-m:p-0 m-l:p-0 t-s:p-0 t-m:p-0 t-l:p-0 t-x:p-0 d-s:p-0 d-m:p-0 d-l:p-0 underline"></Link>
                                )
                            })
                            : ''
                        }
                        
                    </div>
                </div>
                
            </div>

        </footer>
    )
}