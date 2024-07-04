'use client'

import React from "react";
import { Title } from "@/shared/ui/index";
import { iconFinder } from "../../../../public/helpers";

import { useTranslations } from "next-intl";

import { useState, useEffect } from "react";

import getImg from "@/shared/utils/img/getImg";

const ReviewBlock = ({avatar, description, position, name, id, bool} : {avatar: string, description: string, name: string, position: string, id: number, bool: boolean}) => {                       
    return(
        <div className="flex flex-col h-fit gap-4 bg-white rounded-3xl p-4 border-[1px] mx-10 relative">
            {iconFinder("quatation", 'w-[30px] h-[30px] t-s:w-[45px] t-s:h-[45px] t-l:w-[50px] t-l:h-[50px]')}
            <p className="text-xs m-l:text-sm t-s:text-base line-clamp-5 leading-5 tracking-wide t-l:leading-7">{description}</p>
            <div className="flex flex-row gap-4 items-center">
                <img src={getImg(avatar)} className="w-8 h-8 rounded-full t-l:w-[45px] t-l:h-[45px] object-cover"></img>
                <div className="flex flex-col gap-1">
                    <Title text={name}></Title>
                    <Title className="text-gray-500" text={position}></Title>
                </div>
            </div>
            {bool && <p className={`absolute bottom-4 z-[2] px-4 right-4 text-black`}>№ {id}</p>}
        </div>
    )
}

export {ReviewBlock};