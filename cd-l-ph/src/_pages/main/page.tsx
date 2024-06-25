import { FAQ, Services } from "@/widgets/index";
import {PopupLanguage} from "@/widgets/index";
import {PopupBurger} from "@/widgets/index";
import {FeedbackForm} from "@/widgets/Forms/index"
import {Greeting} from "@/widgets/index"
import {WhyWe} from '@/widgets/index'
import {Opinions} from "@/widgets/index"
import {LoadingBar} from "@/widgets/index";

import { useLocale } from "next-intl";

import React from "react";
import { getServices } from "@/widgets/Services/api/index";
import getWhyWeData from "@/widgets/WhyWe/api/getWhyWeData";
import { getLocale } from "next-intl/server";
import getFAQData from "@/widgets/FAQ/api/getFAQData";
import getOpinionsData from "@/widgets/Opinions/api/getOpinionsData";
import getGreetingData from "@/widgets/Greeting/api/getGreeting";
import { isToken } from "@/shared/utils/cookie/cookie";
import { getStaticData } from "@/shared/utils";


const Main = async () => {

        const locale = await getLocale()

        const showIDs = await isToken()

        const services = async () => {
          try{
            
            const services = await getStaticData(locale, 'services')
            return services
          } catch(err: any){
            return {error: true}
          }
        }
        const whywes = async () => {
          try{
            const whywes = await getStaticData(locale, 'whywes')
            return whywes
          } catch(err){
            return {error: true}
          }
        }
        const faqs = async () => {
          try{
            const faqs = await getStaticData(locale, 'faqs')
            return faqs
          } catch(err){
            return {error: true}
          }
        }
        const opinions = async () => {
          try{
            const faqs = await getStaticData(locale, 'opinions')
            return faqs
          } catch(err){
            return {error: true}
          }
        }
        const greeting = async () => {
          try{
            const faqs = await getStaticData(locale, 'greeting')
            return faqs
          } catch(err){
            return {error: true}
          }
        }

        const other = async () => {
          try{
            const faqs = await getStaticData(locale, 'other')
            return faqs
          } catch(err){
            return {error: true}
          }
        }

        const otherData = await other()

        
        return (
          <div className="">
                <PopupBurger></PopupBurger>
                <PopupLanguage></PopupLanguage>
                <Greeting data={await greeting()}></Greeting>
                <Services data={await services()} bool={showIDs} title={otherData.h1.services}></Services>
                <WhyWe data={await whywes()} bool={showIDs} title={otherData.h1.whywe}></WhyWe>
                <FAQ data={await faqs()} bool={showIDs}></FAQ>
                <Opinions data={await opinions()} bool={showIDs}></Opinions>
                <FeedbackForm></FeedbackForm>
          </div>
        );
      }

  export default Main;