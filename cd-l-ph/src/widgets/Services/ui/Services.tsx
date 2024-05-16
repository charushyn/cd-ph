'use client'

import React, { useEffect } from "react";

import services from "../api/data";
import { Title } from "@/shared/ui/index";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentService } from "@/shared/utils";
import { useTranslations } from "next-intl";

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
    const t = useTranslations("services")

    useEffect(() => {
        dispatch(changeCurrentService(t("insurance.title")))
    }, [])

        return(
            <div className="font-OpenSans" id="services">
                <Title text={t("title")} className="text-sm bg-white h-[50px] flex items-center px-4 t-l:px-8 relative"></Title>
                <div className="flex flex-col d-s:flex-row overflow-x-hidden">    
                    {/* {
                        services.map((service) => {
                            return(
                                <Service amountOfServices={amountOfServices} width={''} iconUrl={service.icon} onHoverFunc={() => dispatch(changeCurrentService(service))} onClickFunc={() => dispatch(changeCurrentService(service))} active={service === currentService} photoUrl={service.photoUrl} title={service.title} key={service.title} description={service.description}></Service>
                            )
                        })
                    } */}
                    <Service amountOfServices={4} width={''} iconUrl={t("leasing.urlIcon")} onHoverFunc={() => dispatch(changeCurrentService(t("leasing.title")))} onClickFunc={() => dispatch(changeCurrentService(t("leasing.title")))} active={t("leasing.title") === currentService} photoUrl={t("leasing.urlBg")} title={t("leasing.title")} key={t("leasing.title")} description={t("leasing.description")}></Service>
                    <Service amountOfServices={4} width={''} iconUrl={t("ipoteka.urlIcon")} onHoverFunc={() => dispatch(changeCurrentService(t("ipoteka.title")))} onClickFunc={() => dispatch(changeCurrentService(t("ipoteka.title")))} active={t("ipoteka.title") === currentService} photoUrl={t("ipoteka.urlBg")} title={t("ipoteka.title")} key={t("ipoteka.title")} description={t("ipoteka.description")}></Service>
                     <Service amountOfServices={4} width={''} iconUrl={t("insurance.urlIcon")} onHoverFunc={() => dispatch(changeCurrentService(t("insurance.title")))} onClickFunc={() => dispatch(changeCurrentService(t("insurance.title")))} active={t("insurance.title") === currentService} photoUrl={t("insurance.urlBg")} title={t("insurance.title")} key={t("insurance.title")} description={t("insurance.description")}></Service>
                     <Service amountOfServices={4} width={''} iconUrl={t("investment.urlIcon")} onHoverFunc={() => dispatch(changeCurrentService(t("investment.title")))} onClickFunc={() => dispatch(changeCurrentService(t("investment.title")))} active={t("investment.title") === currentService} photoUrl={t("investment.urlBg")} title={t("investment.title")} key={t("investment.title")} description={t("investment.description")}></Service>
                </div>
            </div>
        )
    

    
}

export default Services;