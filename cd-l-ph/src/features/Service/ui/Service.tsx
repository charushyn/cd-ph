'use client'

import { Title, ScrollToComponent } from "@/shared/ui/index"

// title, description, link(to page with choosed service), photoUrl, iconUrl

const Service = ({title, key, description, photoUrl, amountOfServices, active, onClickFunc, iconUrl} : {title: string, key: any, description: string, photoUrl: string, amountOfServices: number, active: boolean, onClickFunc: any, iconUrl: string}) => {
    const width = (1200 - 900) / amountOfServices
    return(
        <div className={`w-full flex flex-col h-fit bg-black`} key={key} onClick={onClickFunc}>
            <div className={`serviceC relative ${active ? `h-[400px] d-s:w-[900px]` : `h-[70px] m-l:h-[90px] d-s:w-[105px]`} flex flex-col d-s:h-[80vh] `}>
                <div className={` flex flex-row justify-between items-center px-4 uppercase m-l:h-[90px] h-[70px] relative ${active ? 'd-s:justify-end' : 'd-s:justify-center'}`}>
                    <Title className={` text-white ${active && 'opacity-0'} d-s:hidden`} text={title}></Title>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`d-s:hidden w-6 h-6 text-white transition-all duration-200 ${active ? 'rotate-180' : 'rotate-0'}`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    <img src={iconUrl} className={`hidden d-s:block ${active ? ' d-s:hidden relative top-10 right-10' : 'w-8 h-8'}`}></img>
                </div>
                <div className={`info ${active ? '' : 'hidden'} h-fit p-4 flex flex-col gap-4 d-s:gap-6`}>
                    <img src={iconUrl} className={`hidden d-s:block ${active ? 'w-[100px] h-[100px] absolute top-10 right-10' : 'w-8 h-8'}`}></img>
                    <Title className="text-white uppercase relative text-xl t-s:text-2xl d-s:text-3xl" text={title}></Title>
                    <div className=' text-white relative t-s:text-xl d-s:w-[70%]'>{description}</div>
                    <div className='flex justify-end'>
                        <ScrollToComponent hrefElem='main-form' className=" text-white absolute bottom-4 right-4 d-s:bottom-10 d-s:right-10 d-s:px-10 d-s:py-4" isArrowIconNeeded={true} text={'до послуги'}></ScrollToComponent>
                    </div>
                </div>
                <style jsx>{
                        `
                        .serviceC {
                            background-image: url(${photoUrl});
                            background-size: cover;
                            background-repeat: no-repeat;
                            background-position: center;
                            transition: height 0.8s ease;
                            @media screen and (min-width: 1199px) {
                                transition: width 0.8s ease; 
                              }
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
                        .info{
                            animation: fadeIn 2s;
                        }
                        `
                    }</style>
            </div>
    </div>
    )
    
}

export default Service;