'use server'

import WhyWeBlock from "@/features/WhyWe-Block/ui/WhyWeBlock"

import iconName from "../../../../public/helpers/icons/types/iconName"
import { iconFinder } from "../../../../public/helpers"

import { Title } from "@/shared/ui/index"
import getImg from "@/shared/utils/img/getImg"


export default async function WhyWe({data, bool,title} : {data: any, bool: boolean, title: string}){
    return(
        <div className="font-OpenSans gap-4 h-fit relative" id="whywe">
            <Title text={title} className="text-sm bg-white h-[50px] flex items-center px-4 t-l:px-8 relative"></Title>
            <div className="flex flex-col p-4 gap-5 justify-center items-center  t-s:flex-row t-s:flex-wrap t-l:p-8 t-l:justify-around t-l:gap-y-8">
                {
                    !data.error ? data.map(async (item: any) => {
                            let base64Icon = Buffer.from(((await getImg(item.svg)).data),
                                "binary" ).toString("base64");
                            let svg = `data:image/png;base64,${base64Icon}`
                        return(
                            <WhyWeBlock id={item.id} bool={bool} title={item.title} description={item.description} icon={svg}></WhyWeBlock>
                        )
                    }) : ''
                }
            </div>
        </div>
    )
}