'use server'
import { Title } from "@/shared/ui/index";

import { getServices } from "../api/index";

import { getLocale } from "next-intl/server";
import React from "react";

import { Service } from "@/features/index";

import TestService from "@/features/TestService/ui/TestService";
import { useDispatch } from "react-redux";
import getImg from "@/shared/utils/img/getImg";
import { Loading } from "@/build/Providers";




  


function Services ({data, bool, title, button} : {data: any, bool: boolean, title: string, button: string})  {


    

        return(
            <div className="font-OpenSans" id="services">
                <Title text={title} className="text-sm bg-white h-[50px] flex items-center px-4 t-l:px-8 relative"></Title>
                <div className="flex flex-col d-s:flex-row overflow-x-hidden">  
                    {
                            !data.error ? data.map((service: any) => {
                            return(
                                
                                <TestService bool={bool} key={service.id} id={service.id} title={service.title} description={service.description} bgPath={service.bg} svgPath={service.svg} button={button}></TestService>
                                
                            )
                        }) : ''
                    }
                </div>
            </div>
        )
    

    
}

export default Services;