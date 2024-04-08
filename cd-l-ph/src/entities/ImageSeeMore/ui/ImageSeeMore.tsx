import { Link } from "@/shared/ui/index"

import { cn } from "@/shared/utils/index";

const ImageSeeMore = ({linkSeeMore, photoUrl, className} : {linkSeeMore: string, photoUrl: string, className?: string}) => {
    return(
        <div className={cn('h-fit relative', className)}>
                <img src={photoUrl} className={cn('object-cover w-full h-[300px]')}></img>
                <Link href={linkSeeMore} text="read" className=" bg-white text-black absolute bottom-0 right-0"></Link>
        </div>
    )
}

export default ImageSeeMore;