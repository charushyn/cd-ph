import { cn } from "@/shared/utils";

// href, theme, urlIcon

const ALink = (
    {
        className,
        isArrowIconNeeded,
        text,
        href,
        arrowClassName,
        isHoverEffect,
        onClick,
        normalcase,
    }
    :
    {
        className?: string,
        isArrowIconNeeded?: boolean,
        text: string
        href: string,
        arrowClassName?: string,
        isHoverEffect?: boolean,
        onClick?: any,
        normalcase?: boolean,
    }) => {
    return(
        
        <div className={cn(`flex flex-row items-center justify-center w-fit h-fit px-4 py-2 t-l:px-6 t-l:py-4 t-x:px-10 t-x:py-4 gap-2 bg-black z-20 relative  ${isHoverEffect && 'd-s:hover:text-black d-s:hover:bg-gold d-s:duration-200'}`, className)} onClick={onClick}>
            <p className={`uppercase text-xs t-s:text-sm t-m:text-base t-x:text-lg ${normalcase && ' normal-case'}`}>{text}</p>
            <a href={href} target="_blank" rel="noopener noreferrer" className="absolute top-0 bottom-0 left-0 right-0 w-full h-full"></a>
            {
                isArrowIconNeeded &&    
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={cn(`w-6 h-6 `, arrowClassName)}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            }
        </div>
    )
}

export default ALink;