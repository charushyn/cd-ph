import { cn } from "@/shared/utils/index"

const ScrollToComponent = (
    {
        className,
        isArrowIconNeeded,
        text,
        hrefElem,
        arrowClassName,
    }
    :
    {
        className?: string,
        isArrowIconNeeded?: boolean,
        text: string
        hrefElem: string,
        arrowClassName?: string,
    }
) => {
    let stringHref = `#${hrefElem}`
    return(
        <a href={stringHref}  className={cn(`flex flex-row w-fit h-fit px-4 py-2 gap-2 bg-black z-20 hover:text-black hover:bg-gold duration-200`, className)}>
            <p className='uppercase'>{text}</p>
            {
                isArrowIconNeeded 
                && 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={cn(`w-6 h-6`, arrowClassName)}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            }
        </a>
    )
}

export default ScrollToComponent;