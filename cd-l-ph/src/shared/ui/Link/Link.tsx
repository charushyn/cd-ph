import LinkTo from "next/link"

import { cn } from "@/shared/utils";

// href, theme, urlIcon

const Link = ({text, href, className} : {text: string, className: string, href: string}) => {
    return(
        <LinkTo href={href} className={cn(`flex flex-row w-fit h-fit px-4 py-2 gap-2 bg-black z-20`, className)}>
            <p className='uppercase '>{text}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-6 h-6 `}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
        </LinkTo>
    )
}

export default Link;