import { Link } from "@/shared/ui/index"

import { cn } from "@/shared/utils/index";

const ImageSeeMore = ({linkSeeMore, photoUrl, className} : {linkSeeMore: string, photoUrl: string, className?: string}) => {
    return(
        <div className={cn('h-fit relative', className)}>
                <img src={photoUrl} className='object-cover w-full h-full'></img>
                <Link isArrowNeeded={false} href={linkSeeMore} text="read" className=" bg-white text-xs text-black absolute bottom-0 right-0 t-m:text-sm t-l:text-base"></Link>
        </div>
    )
}

export default ImageSeeMore;