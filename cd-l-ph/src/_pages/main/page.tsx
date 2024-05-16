'use client'

import { FAQ, Services } from "@/widgets/index";
import {PopupLanguage} from "@/widgets/index";
import {PopupBurger} from "@/widgets/index";
import {FeedbackForm} from "@/widgets/Forms/index"
import {Greeting} from "@/widgets/index"
import {WhyWe} from '@/widgets/index'
import {Opinions} from "@/widgets/index"
import {LoadingBar} from "@/widgets/index";

import React from "react";


const Main = () => {
        const [pageLoaded, setPageLoaded] = React.useState(false)

        React.useEffect(() => {
          setPageLoaded(true)
        }, [])
        
        return (
          <div className="">
            {
              pageLoaded ? 
              <>
                <PopupBurger></PopupBurger>
                <PopupLanguage></PopupLanguage>
                <Greeting></Greeting>
                <Services></Services>
                <WhyWe></WhyWe>
                <FAQ></FAQ>
                <Opinions></Opinions>
                <FeedbackForm></FeedbackForm>
              </> :
                      <LoadingBar></LoadingBar>
            }
          </div>
        );
      }

  export default Main;