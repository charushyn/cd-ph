import { Title } from "@/shared/ui/index"
import { BarLoader } from "@/entities/index";
const LoadingCard = ({text} : {text:string}) => {
    return(
        <div className="flex items-center justify-center absolute h-full w-full top-0 bottom-0 bg-white border-[1px]  z-20 left-0 right-0">
            <div className='flex flex-col items-center gap-2 p-4'>
                <Title text={text} className=""></Title>
                <BarLoader className="bg-white"></BarLoader>
            </div>
        </div>
    )
}

export default LoadingCard;