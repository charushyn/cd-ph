'use client'

import Loader from 'react-spinners/BarLoader'

import { Title } from '@/shared/ui/index'

import { cn } from '@/shared/utils/index'

const BarLoader = ({className} : {className?: string}) => {
    return(
            <Loader 
            loading={true}
            color={'#000000'}
            className={cn('w-10 h-2', className)}
            speedMultiplier={1}
            />
    )
}

export default BarLoader;