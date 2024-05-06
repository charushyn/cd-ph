'use client'

import { Title, ScrollToComponent } from "@/shared/ui/index"

import { iconFinder } from "../../../../public/helpers"

// title, description, link(to page with choosed service), photoUrl, iconUrl

const Service = ({title, key, description, photoUrl, active, onClickFunc, iconUrl, width, onHoverFunc} : {title: string, key: any, description: string, photoUrl: string, active: boolean, onClickFunc: any, iconUrl: string, width: any, onHoverFunc: any}) => {
    const func = () => {
        if(width < 0){
            return
        }
        onHoverFunc()
    }
    return(
        <div className={`w-full flex flex-col h-fit bg-black`} key={key} onClick={onClickFunc} >
            <div onMouseOver={func} className={`serviceC relative ${active ? `active d-s:w-[1124px]` : `h-[70px] m-l:h-[90px] t-l:h-[100px] justify-center d-s:justify-start`} flex flex-col`}>
                <div className={` flex flex-row justify-between items-center px-4 uppercase m-l:h-[90px] h-[70px] t-l:px-8 d-s:px-0 relative ${active ? 'd-s:justify-end' : 'd-s:justify-center'}`}>
                    <Title className={`text-sm text-white ${active && 'opacity-0'} d-s:hidden`} text={title}></Title>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`d-s:hidden w-6 h-6 t-m:w-8 t-m:h-8 text-white transition-all duration-200 ${active ? 'rotate-180' : 'rotate-0'}`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    {iconFinder(iconUrl, `hidden d-s:block w-[24px] h-[24px] ${active ? ' d-s:hidden' : ''}`)}
                    {/* <img src={iconUrl} className={`hidden d-s:block ${active ? ' d-s:hidden relative top-10 right-10' : 'w-8 h-8'}`}></img> */}
                </div>
                <div className={`info ${active ? '' : 'hidden'} h-fit w-full p-4 t-l:px-8 t-l:py-0 flex flex-col gap-4 d-s:gap-6`}>
                    {/* {iconFinder(iconUrl,`hidden d-s:block ${active ? 'absolute top-8 right-10' : ''}`)} */}
                    {/* <img src={iconUrl} className={`hidden d-s:block ${active ? 'w-[100px] h-[100px] absolute top-10 right-10' : 'w-8 h-8'}`}></img> */}
                    <Title className="text-white uppercase relative" text={title}></Title>
                    <div className=' text-white relative text-xs leading-5 t-s:text-base t-s:w-[70%] t-m:text-lg d-s:w-[60%]'>{description}</div>
                    <ScrollToComponent hrefElem='feedbackform' className=" text-white absolute bottom-4 right-4 d-s:bottom-10 d-s:right-10 t-x:px-10 t-x:py-4" isArrowIconNeeded={true} isHoverEffect={true} text={'до послуги'}></ScrollToComponent>
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
                                height: 90svh;
                                width: ${width}px;
                                transition: width 0.8s ease; 
                            }
                        }
                        .active {
                            height: 400px;
                            @media screen and (min-width: 1199px) {
                                height: 90svh;
                                transition: width 0.8s ease;
                                width: 1124px;
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