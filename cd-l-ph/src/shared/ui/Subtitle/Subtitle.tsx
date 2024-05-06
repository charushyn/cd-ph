import { cn } from "@/shared/utils/index"

const Subtitle = ({ className, text} : {className?: string, text: string}) => {
    return(
        <h2 className={cn(" text-black text-xs t-s:text-sm t-m:text-base font-Acrom_Light", className)}>{text}</h2>
    )
}

export default Subtitle;