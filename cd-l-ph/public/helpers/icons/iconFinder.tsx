import Image from 'next/image'

import SmallGoldLogo from './store/gold-logo.png'

type iconName = 
    "small-gold-logo" | 
    "flag-ukraine" |
    "flag-poland" |
    "flag-russia" |
    "flag-gb" |
    "chevron-down"


const iconFinder = (iconName: iconName
) => {
    switch(iconName){
        case "small-gold-logo":
            return (
                <Image src={SmallGoldLogo} className='w-fit h-[20px]' alt=""></Image>
            )
        case "flag-ukraine":
            return(
                <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/510px-Flag_of_Ukraine.svg.png'} className='w-6 h-[20px]' alt=""></img>
            )
        case "flag-poland":
            return(
                <img src={'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/640px-Flag_of_Poland.svg.png'} className='w-6 h-[20px]'  alt=""></img> 
            )
        case "flag-russia":
            return (
                <img src={'https://upload.wikimedia.org/wikipedia/commons/6/6f/White-blue-white_flag.svg'} className='w-6 h-[20px]'  alt=""></img>
            )
        case "flag-gb":
            return (
                <img src={'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png'} className='w-6 h-[20px]' alt=""></img>
            )    
    }
}

export default iconFinder;