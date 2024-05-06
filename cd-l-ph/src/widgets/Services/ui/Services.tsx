'use client'

import { Service } from "@/features";

import React from "react";

import services from "../api/data";
import { Title } from "@/shared/ui/index";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentService } from "@/shared/utils";

import { useTranslations } from "next-intl";

const Services = () => {
    const t = useTranslations('main.services');
    const dispatch = useDispatch()
    const currentService = useSelector((state: any) => state.serviceReducer.currentServiceShowed)

    const userWidth = window.innerWidth;
    const widthForEachService = (userWidth - 1124) / ( services.length - 1 )

    React.useEffect(() => {
        dispatch(changeCurrentService(services[Math.floor(Math.random() * services.length - 1) + 1]))
    }, [])
    return(
        <div className="font-OpenSans" id="services">
            <Title text={t('h1')} className="text-sm bg-white h-[50px] flex items-center px-4 t-l:px-8 relative"></Title>
            <div className="flex flex-col d-s:flex-row overflow-x-hidden">
                {
                    services.map((service) => {
                        return(
                            <Service width={widthForEachService} iconUrl={service.icon} onHoverFunc={() => dispatch(changeCurrentService(service))} onClickFunc={() => dispatch(changeCurrentService(service))} active={service === currentService} photoUrl={service.photoUrl} title={service.title} key={service.title} description={service.description}></Service>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Services;