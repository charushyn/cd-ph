import Loader from 'react-spinners/SquareLoader'

import { Title } from '@/shared/ui/index'

import { cn } from '@/shared/utils/index'

const BarLoader = ({className, delay} : {className?: string, delay: number}) => {
    return(
            // <Loader
            // loading={true}
            // color={'#D3BE5F'}
            // className={cn('w-10 h-2', className)}
            // speedMultiplier={1}
            // />
            <div style={{
                animationDelay: `${delay}s`
            }}className={cn(`bg-gold w-4 h-10 animate-bounce`, className)}></div>
    )
}

export default BarLoader;