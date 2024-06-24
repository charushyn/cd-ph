'use server'

import { Link, ScrollToComponent, Title, Subtitle } from "@/shared/ui/index"
import { TitleWithSbtitle } from "@/entities/index"

import { iconFinder } from "../../../../public/helpers"

import { useTranslations } from "next-intl"

import dynamic from 'next/dynamic'

import { getStaticData } from "@/shared/utils"
import { getLocale } from "next-intl/server"
import getImg from "@/shared/utils/img/getImg"
const DynamicMap = dynamic(() => import('@/shared/ui/LeafletMap/ui/LeafletMap'), {
  ssr: false
});



export default async function Footer(){
    const locale = await getLocale()
    const data = await getStaticData(locale, 'footer')

    const idSocialMedia = data.findIndex((item:any) => item.id === 1)
    const idSchedule = data.findIndex((item: any) => item.id === 0)
    const idSiteAgree = data.findIndex((item: any) => item.id === 2) 

    
    
    return(
        <footer className='font-OpenSans flex flex-col text-xs bg-black text-white gap-4 h-fit p-4' id='footer'>
            <ScrollToComponent text={''} arrowClassName=" rotate-[-90deg]" hrefElem="top" isArrowIconNeeded={true} className="w-full p-0 items-center my-2 justify-center" isHoverEffect={false}></ScrollToComponent>
            <div className="w-90svh h-50svh mx-auto">
                <DynamicMap />
            </div>
            <div className='flex flex-col gap-4 h-fit'>
                <div className='flex flex-col gap-2 m-l:px-[5svh]'>
                    <a target="_blank" href="https://www.google.com/maps/place/The+Best+Result+-+Biuro+Rachunkowe+Ksi%C4%99gowe+Leasing+Ubezpieczenia+Warszawa+%D0%91%D1%83%D1%85%D0%B3%D0%B0%D0%BB%D1%82%D0%B5%D1%80%D1%96%D1%8F+%D0%A1%D1%82%D1%80%D0%B0%D1%85%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F+%D0%9B%D1%96%D0%B7%D0%B8%D0%BD%D0%B3+%D0%86%D0%BF%D0%BE%D1%82%D0%B5%D0%BA%D0%B0+%D0%9F%D0%BE%D0%BB%D1%8C%D1%89%D0%B0/@52.2700317,21.0449526,17z/data=!3m1!4b1!4m6!3m5!1s0x471ecd3b7061cd29:0x282dcd5a6166385!8m2!3d52.2700284!4d21.0475275!16s%2Fg%2F11vwn_01wk?hl=pl-PL&entry=ttu" className='flex flex-row gap-1 items-center cursor-pointer mt-2'>
                        <Title className='text-white underline' text="Ks. Piotra Skargi 56, 03-516 Warszawa, Targówek"></Title>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </a>
                </div>
                <div className="flex flex-col gap-4 t-s:flex-row t-s:flex-wrap t-s:justify-between t-s:mt-10 m-l:px-[5svh]">
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row items-center gap-2'>
                            {iconFinder('small-gold-logo')}
                            <Title className='text-white' text="CD Phinance"></Title>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Title className="text-white" text={data[idSchedule].title}></Title>
                            {
                                data[idSchedule] ? data[idSchedule].data.map((item: any) => {
                                    return (
                                        <div className="w-fit flex flex-row">
                                            <Subtitle text={`${item.day}: ${item.isOpen ? `${item.time.from}-${item.time.to}` : item.closed}`}></Subtitle>
                                        </div>
                                    )
                                }) : ''
                            }
                        </div>

                    </div>
                    <div className='flex flex-col gap-4'>
                        <Title text={data[idSocialMedia].title} className="text-white"></Title>
                        {/* {
                            data[idSocialMedia] ? data[idSocialMedia].data.map(async (item: any) => {
                              
                                let img = Buffer.from(((await getImg(item.svg)).data),
                                "binary" ).toString("base64");

                                let icon =`data:image/png;base64,${img}`

                                return(
                                    <div className='flex flex-row items-center gap-2 cursor-pointer relative'>
                                        <a className="absolute top-0 bottom-0 left-0 right-0 w-full h-full" href={item.src} target="_blank" rel="noopener noreferrer"></a>
                                        <img src={icon} className='w-6 h-6' alt=""></img>
                                        <p className='underline text-xs decoration-1 t-s:text-sm t-m:text-base font-Acrom_Light'>{item.text}</p>
                                    </div>
                                )
                            }) : ''
                        } */}
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Title className='text-white' text={data[idSiteAgree].title}></Title>
                        {
                            data[idSiteAgree] ?
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