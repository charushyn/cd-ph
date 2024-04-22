'use client'

import React from "react";
import { Title } from "@/shared/ui/index";

const ReviewBlock = ({avatar, title, description, srcToOpinion, hardCodeColorBg} : {avatar: string, title: string, description: string, srcToOpinion: string, hardCodeColorBg?: string}) => {
    const [toggleShowDesc, setToggleShowDesc] = React.useState(false)
    return(
        <div className="flex flex-row gap-2 bg-white rounded-3xl px-2 py-4 border mx-2">
            <div className={`w-[30px] h-[30px] rounded-full bg-green-700 text-white flex items-center justify-center`}>
                <span>{avatar}</span>
                </div>
            <div className="flex  flex-col gap-2 max-w-[80%] relative bottom-1 text-black">
                <Title text={title} className="line-clamp-2"></Title>
                <p className="text-xs t-s:text-sm t-m:text-base t-x:text-lg line-clamp-3">{description}</p>
            </div>
        </div>
    )
}

export {ReviewBlock};