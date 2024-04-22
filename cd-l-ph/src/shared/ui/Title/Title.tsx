import { cn } from "@/shared/utils/index"

const Title = ({ className, text} : {className: string, text: string}) => {
    return(
        <h2 className={cn(" text-black text-sm t-s:text-base t-m:text-lg t-x:text-xl", className)}>{text}</h2>
    )
}

export default Title;