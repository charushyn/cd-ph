'use client'

import React from "react";

import services from "../api/data";
import { Title } from "@/shared/ui/index";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentService } from "@/shared/utils";

import dynamic from "next/dynamic";

const Service = dynamic(
    () => {
      return import("@/features/Service/ui/Service");
    },
    { ssr: false }
  );

const Services = () => {
    const dispatch = useDispatch()
    const currentService = useSelector((state: any) => state.serviceReducer.currentServiceShowed)

    React.useEffect(() => {
        dispatch(changeCurrentService(services[Math.floor(Math.random() * services.length - 1) + 1]))
    }, [])

    let amountOfServices = services.length

    



        
        return(
            <div className="font-OpenSans" id="services">
                <Title text={''} className="text-sm bg-white h-[50px] flex items-center px-4 t-l:px-8 relative"></Title>
                <div className="flex flex-col d-s:flex-row overflow-x-hidden">
                    {
                        services.map((service) => {
                            return(
                                <Service amountOfServices={amountOfServices} width={''} iconUrl={service.icon} onHoverFunc={() => dispatch(changeCurrentService(service))} onClickFunc={() => dispatch(changeCurrentService(service))} active={service === currentService} photoUrl={service.photoUrl} title={service.title} key={service.title} description={service.description}></Service>
                            )
                        })
                    }
                </div>
            </div>
        )
    

    
}

export default Services;