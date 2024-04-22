import { Title } from "@/shared/ui/index"

const TitleWithSbtitle = ({titleText, subtitleText} : {titleText: string, subtitleText: string}) => {
    return(
                    <div className=' flex flex-col gap-1'>
                        <Title text={titleText} className="text-white text-sm"></Title>
                        <p className='text-white text-xs'>{subtitleText}</p>
                    </div>                        
    )
}

export default TitleWithSbtitle;