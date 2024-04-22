import Image from 'next/image'

import SmallGoldLogo from './store/gold-logo.png'
import quiestionLoop from './store/question-loop.svg'
import papersAndCalculation from './store/papers-and-calculating.svg'
import shield from "./store/shield.svg"
import car from './store/car.svg'
import handshake from './store/handshake.svg'
import team from './store/team.svg'

import iconName from './types/iconName'

import { cn } from '@/shared/utils/index'


const iconFinder = (iconName: iconName, className?: string
) => {
    switch(iconName){
        case "small-gold-logo":
            return (
                <Image src={SmallGoldLogo} className={cn('w-fit h-[20px] t-s:h-[30px]', className)} alt=""></Image>
            )
        case "flag-ukraine":
            return(
                <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/510px-Flag_of_Ukraine.svg.png'} className='w-6 h-[20px] t-s:h-[30px] t-s:w-[25px]' alt=""></img>
            )
        case "flag-poland":
            return(
                <img src={'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/640px-Flag_of_Poland.svg.png'} className='w-6 h-[20px] t-s:h-[30px] t-s:w-[25px]'  alt=""></img> 
            )
        case "flag-russia":
            return (
                <img src={'https://upload.wikimedia.org/wikipedia/commons/6/6f/White-blue-white_flag.svg'} className='w-6 h-[20px] t-s:h-[30px] t-s:w-[25px]'  alt=""></img>
            )
        case "flag-gb":
            return (
                <img src={'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png'} className='w-6 h-[20px] t-s:h-[30px] t-s:w-[25px]' alt=""></img>
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
    }
}

export default iconFinder;