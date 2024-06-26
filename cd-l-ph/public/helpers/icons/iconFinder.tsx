import Image from 'next/image'

import SmallGoldLogo from './store/gold-logo.png'
import quiestionLoop from './store/question-loop.svg'
import papersAndCalculation from './store/papers-and-calculating.svg'
import shield from "./store/shield.svg"
import car from './store/car.svg'
import handshake from './store/handshake.svg'
import team from './store/team.svg'
import quatation from "./store/quatation.svg"
import investment from "./store/investment.svg"
import insurance from "./store/insurance.svg"
import house from "./store/house.svg"
import time from "./store/time.svg"
import chair from "./store/chair.svg"
import phone from "./store/phone.svg"
import telegram from "./store/telegram.svg"
import facebook from "./store/facebook.svg"
import whatsapp from "./store/whatsapp.svg"
import instagram from "./store/instagram.svg"



import iconName from './types/iconName'

import { cn } from '@/shared/utils/index'


const iconFinder = (iconName: iconName, className?: string
) => {
    switch(iconName){
        case "small-gold-logo":
            return (
                <Image src={SmallGoldLogo} className={cn('w-fit h-[20px] t-s:h-[20px]', className)} alt=""></Image>
            )
        case "flag-ua":
            return(
                <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/510px-Flag_of_Ukraine.svg.png'} className='w-6 h-[20px] t-s:h-[20px] t-s:w-[25px]' alt=""></img>
            )
        case "flag-pl":
            return(
                <img src={'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/640px-Flag_of_Poland.svg.png'} className='w-6 h-[20px] t-s:h-[20px] t-s:w-[25px]'  alt=""></img> 
            )
        case "flag-ru":
            return (
                <img src={'https://upload.wikimedia.org/wikipedia/commons/6/6f/White-blue-white_flag.svg'} className='w-6 h-[20px] t-s:h-[20px] t-s:w-[25px]'  alt=""></img>
            )
        case "flag-en":
            return (
                <img src={'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png'} className='w-6 h-[20px] t-s:h-[20px] t-s:w-[25px]' alt=""></img>
            )
        case "clock":
            return(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cn("w-6 h-6", className)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            )
        case "question-loop":
            return (
                <Image src={quiestionLoop} className={cn('w-[20px] h-[20px]', className)} alt=""></Image>
            )
        case "team":
            return (
                <Image src={team} className={cn('w-[20px] h-[20px]', className)} alt=""></Image>
            )
        case "papers-and-calculating":
            return (
                <Image src={papersAndCalculation} className={cn('w-[20px] h-[20px]', className)} alt=""></Image>
            )
        case "shield":
            return(
                <Image src={shield} className={cn('w-[20px] h-[20px]', className)} alt=""></Image>
            )
        case "handshake":
            return(
                <Image src={handshake} className={cn('w-[20px] h-[20px]', className)} alt=""></Image>
            )
        case "car":
            return(
                <Image src={car} className={cn('w-[20px] h-[20px]', className)} alt=""></Image>
            )
        case "quatation":
            return(
                <Image src={quatation} className={cn('w-[20px] h-[20px]', className)} alt=""></Image>
            )
        case "investment":
            return(
                <Image src={investment} className={cn('w-[20px] h-[20px]', className)} alt=""></Image>
            )
        case "insurance":
            return(
                <Image src={insurance} className={cn('w-[20px] h-[20px]', className)} alt=""></Image>
            )
        case "house":
            return(
                <Image src={house} className={cn('w-[20px] h-[20px]', className)} alt=""></Image>
            )
        case "time":
            return(
                <Image src={time} className={cn('w-[20px] h-[20px]', className)} alt=""></Image>
            )
        case "phone":
            return(
                <Image src={phone} className={cn('w-[20px] h-[20px]', className)} alt=""></Image>
            )
        case "chair":
            return(
                <Image src={chair} className={cn('w-[20px] h-[20px]', className)} alt=""></Image>
            )
        case "instagram":
            return(
                <Image src={instagram} className={cn('w-[20px] h-[20px]', className)} alt=""></Image>
            )
        case "telegram":
            return(
                <Image src={telegram} className={cn('w-[20px] h-[20px]', className)} alt=""></Image>
            )
        case "facebook":
            return(
                <Image src={facebook} className={cn('w-[20px] h-[20px]', className)} alt=""></Image>
            )
        case "whatsapp":
            return(
                <Image src={whatsapp} className={cn('w-[20px] h-[20px]', className)} alt=""></Image>
            )
    }
}

export default iconFinder;