'use client'

import React from "react";
import { Title } from "@/shared/ui/index";
import { iconFinder } from "../../../../public/helpers";

import { useTranslations } from "next-intl";

const ReviewBlock = ({avatar, title, description, srcToOpinion, hardCodeColorBg, name} : {avatar: string, title: string, description: string, srcToOpinion: string, name: string, hardCodeColorBg?: string}) => {
    const t = useTranslations("opinions")
    const bgStyle = `bg-${hardCodeColorBg}-700`
    return(
        <div className="flex flex-col h-fit gap-4 bg-white rounded-3xl p-4 border-[1px] mx-10">
            {iconFinder("quatation", 'w-[30px] h-[30px] t-s:w-[45px] t-s:h-[45px] t-l:w-[50px] t-l:h-[50px]')}
            <p className="text-xs m-l:text-sm t-s:text-base line-clamp-5 leading-5 tracking-wide t-l:leading-7">{description}</p>
            <div className="flex flex-row gap-4 items-center">
                <div className="flex items-center justify-center w-8 h-8 t-l:w-[45px] t-l:h-[45px] rounded-full bg-green-700">
                    <p className="text-white">{avatar}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <Title text={name}></Title>
                    <Title className="text-gray-500" text={`${t("client")} CD Finance`}></Title>
                </div>
            </div>
        </div>
    )
}

export {ReviewBlock};