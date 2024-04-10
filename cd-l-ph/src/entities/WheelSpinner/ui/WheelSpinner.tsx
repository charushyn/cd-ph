'use client'

import ClipLoader from 'react-spinners/ClipLoader'

import { Title } from '@/shared/ui/index'

import { cn } from '@/shared/utils/index'

const WheelSpinner = ({text, className} : {text: string, className?: string}) => {
    return(
        <div className='flex flex-col items-center gap-y-5'>
            <Title text={text} className='text-black'></Title>
            <ClipLoader 
            loading={true}
            color={'#0000000'}
            className={cn('w-10 h-10', className)}
            />
        </div>
    )
}

export default WheelSpinner;