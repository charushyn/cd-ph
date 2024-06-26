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


  


function Services ({data, bool, title} : {data: any, bool: boolean, title: string})  {
    

        return(
            <div className="font-OpenSans" id="services">
                <Title text={title} className="text-sm bg-white h-[50px] flex items-center px-4 t-l:px-8 relative"></Title>
                <div className="flex flex-col d-s:flex-row overflow-x-hidden">  
                    {
                            !data.error ? data.map(async (service: any) => {
                                let base64Bg = Buffer.from(((await getImg(service.bg)).data),
                                "binary" ).toString("base64");
                
                                let base64Icon = Buffer.from(((await getImg(service.svg)).data),
                                    "binary" ).toString("base64");
                
                               
                                
                            
                            let bg =`data:image/png;base64,${base64Bg}`
                            let svg = `data:image/png;base64,${base64Icon}`
                            return(
                                
                                <TestService bool={bool} key={service.id} id={service.id} title={service.title} description={service.description} bg={bg} svg={svg}></TestService>
                                
                            )
                        }) : ''
                    }
                </div>
            </div>
        )
    

    
}

export default Services;