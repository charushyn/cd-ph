'use client'

import { Service } from "@/features";

import React from "react";

import services from "../api/data";
import { Title } from "@/shared/ui/index";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentService } from "@/shared/utils";

const Services = () => {
    const dispatch = useDispatch()
    const currentService = useSelector((state: any) => state.serviceReducer.currentServiceShowed)

    React.useEffect(() => {
        dispatch(changeCurrentService(services[Math.floor(Math.random() * services.length - 1) + 1]))
    }, [])
    return(
        <div>
            <div className="h-[70px] flex items-center px-4">
                <Title text="Наші послуги" className=""></Title>
            </div>
            <div className="flex flex-col t-s:flex-row">
                {
                    services.map((service) => {
                        return(
                            <Service iconUrl={service.icon} onClickFunc={() => dispatch(changeCurrentService(service))} active={service === currentService} amountOfServices={services.length} photoUrl={service.photoUrl} title={service.title} key={service.title} description={service.description}></Service>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Services;