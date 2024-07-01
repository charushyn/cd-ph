import { FAQ, Footer, Header, Services } from "@/widgets/index";
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
import { Loading } from "@/build/Providers";
import { getStaticData } from "@/shared/utils";
import getImg from "@/shared/utils/img/getImg";


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
            const other = await getStaticData(locale, 'other')
            return other
          } catch(err){
            return {error: true}
          }
        }


        const greetingData = await greeting()
        const servicesData = await services()
        const whyweData = await whywes()
        const faqData = await faqs()
        const opinionsData = await opinions()
        const otherData = await other()



        const {h1, logo, buttons, map} = otherData

        const logoSrc = (await getImg(logo)).data
        const ulServices = [...servicesData.map((item:any) => {return item.title})]
        
        return (
          <div className="relative">
                <Header logo={logoSrc}></Header>
                <PopupBurger></PopupBurger>
                <PopupLanguage></PopupLanguage>
                <Greeting data={greetingData}></Greeting>
                <Services data={servicesData} bool={showIDs} title={h1.services} button={buttons.services}></Services>
                <WhyWe data={whyweData} bool={showIDs} title={h1.whywe}></WhyWe>
                <FAQ data={faqData} bool={showIDs} title={h1.faq} button={buttons.faq}></FAQ>
                <Opinions data={opinionsData} bool={showIDs} title={h1.opinions} button={buttons.opinions} href={map.link}></Opinions>
                <FeedbackForm title={h1.form} button={buttons.form} ulServices={ulServices}></FeedbackForm>
                <Footer map={map} logo={logoSrc}></Footer>
          </div>
        );
      }

  export default Main;