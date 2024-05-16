

import { Link, ScrollToComponent, Title, Subtitle } from "@/shared/ui/index"
import { TitleWithSbtitle } from "@/entities/index"

import { iconFinder } from "../../../../public/helpers"

import { useTranslations } from "next-intl"

import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('@/shared/ui/LeafletMap/ui/LeafletMap'), {
  ssr: false
});



export default function Footer(){
    const t = useTranslations("footer")
    return(
        <footer className='font-OpenSans flex flex-col text-xs bg-black text-white gap-4 h-fit p-4' id='footer'>
            <ScrollToComponent text={t("button")} arrowClassName=" rotate-[-90deg]" hrefElem="top" isArrowIconNeeded={true} className="w-full p-0 items-center my-2 justify-center" isHoverEffect={false}></ScrollToComponent>
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
                            <Title text={t("schedule.title")} className="text-white"></Title>
                            <Subtitle text={t("schedule.0")} className="text-white"></Subtitle>
                            <Subtitle text={t("schedule.1")} className="text-white"></Subtitle>
                            <Subtitle text={t("schedule.2")} className="text-white"></Subtitle>
                            <Subtitle text={t("schedule.3")} className="text-white"></Subtitle>
                            <Subtitle text={t("schedule.4")} className="text-white"></Subtitle>
                            <Subtitle text={t("schedule.5")} className="text-white"></Subtitle>
                            <Subtitle text={t("schedule.6")} className="text-white"></Subtitle>
                        </div>

                    </div>
                    <div className='flex flex-col gap-4'>
                        <Title text="Social Media" className="text-white"></Title>
                        <div className='flex flex-row items-center gap-2 cursor-pointer relative'>
                            <a className="absolute top-0 bottom-0 left-0 right-0 w-full h-full" href="https://t.me/cdfinancebot" target="_blank" rel="noopener noreferrer"></a>
                            <div className="w-[20px] h-[20px]">
                                {iconFinder("telegram")}
                            </div>
                            <p className='underline text-xs decoration-1 t-s:text-sm t-m:text-base font-Acrom_Light'>@cd_finance</p>
                        </div>
                        <div className='flex flex-row items-center gap-2 cursor-pointer relative'>
                            <a className="absolute top-0 bottom-0 left-0 right-0 w-full h-full" href="https://www.facebook.com/cd.finance.poland" target="_blank" rel="noopener noreferrer"></a>
                            <div className="w-[20px] h-[20px]">
                                {iconFinder("facebook")}
                            </div>
                            <p className='underline text-xs decoration-1 t-s:text-sm t-m:text-base font-Acrom_Light'>Facebook</p>
                        </div>
                        <div className='flex flex-row items-center gap-2 cursor-pointer relative'>
                            <a className="absolute top-0 bottom-0 left-0 right-0 w-full h-full" href="https://www.instagram.com/cd.finance/" target="_blank" rel="noopener noreferrer"></a>
                            <div className="w-[20px] h-[20px]">
                                {iconFinder("instagram")}
                            </div>
                            <p className='underline text-xs decoration-1 t-s:text-sm t-m:text-base font-Acrom_Light'>@cd.finance</p>
                        </div>
                        <div className='flex flex-row items-center gap-2 cursor-pointer relative'>
                            <a className="absolute top-0 bottom-0 left-0 right-0 w-full h-full" href="https://wa.me/message/7LWC3YO5DXYSP1" target="_blank" rel="noopener noreferrer"></a>
                            <div className="w-[20px] h-[20px]">
                                {iconFinder("whatsapp")}
                            </div>
                            <p className='underline decoration-1 text-xs t-s:text-sm t-m:text-base font-Acrom_Light'>WhatsApp</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Title className='text-white' text={t("accept.title")}></Title>
                        {/* <Link isArrowIconNeeded={true} text={t("accept.privicy-policy")} href="/privicy-policy" className="w-full m-s:p-0 m-m:p-0 m-l:p-0 t-s:p-0 t-m:p-0 t-l:p-0 t-x:p-0 d-s:p-0 d-m:p-0 d-l:p-0 underline"></Link> */}
                    </div>
                </div>
                
            </div>

        </footer>
    )
}