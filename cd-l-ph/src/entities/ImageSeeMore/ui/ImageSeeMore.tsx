import { Link } from "@/shared/ui/index"

const ImageSeeMore = ({linkSeeMore, photoUrl} : {linkSeeMore: string, photoUrl: string}) => {
    return(
        <div className='h-fit relative'>
                <img src={photoUrl} className=' object-cover w-full h-[300px]'></img>
                <Link href={linkSeeMore} text="read" className=" bg-white text-black absolute bottom-0 right-0"></Link>
        </div>
    )
}

export default ImageSeeMore;