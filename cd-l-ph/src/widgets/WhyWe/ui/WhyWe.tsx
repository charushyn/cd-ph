'use client'

import WhyWeBlock from "@/features/WhyWe-Block/ui/WhyWeBlock"

import {whyWeData} from "../api/whyWeData"

import iconName from "../../../../public/helpers/icons/types/iconName"
import { iconFinder } from "../../../../public/helpers"

import { Title } from "@/shared/ui/index"


export default function WhyWe(){
    return(
        <div className="font-OpenSans gap-4 h-fit relative" id="whywe">
            <Title text={''} className="text-sm bg-white h-[50px] flex items-center px-4 t-l:px-8 relative"></Title>
            <div className="flex flex-col p-4 gap-5 justify-center items-center  t-s:flex-row t-s:flex-wrap t-l:p-8 t-l:justify-around t-l:gap-y-8">
                
            {whyWeData.map((item) => {
                return(
                    <WhyWeBlock
                    title={item.title}
                    description={item.description}
                    iconName={item.iconName}
                    key={item.title}
                    >
                    </WhyWeBlock>
                )
            })}
            </div>
            <style jsx>{
                        `
                        .serviceC {
                            background-image: url('https://www.freelogoservices.com/blog/wp-content/uploads/laptop-header-picture-id910806154.jpg');
                            background-attachment: fixed;
                            background-size: cover;
                            background-repeat: no-repeat;
                            background-position: center;
                        }
                        
                        .serviceC::before {    
                            content: "";
                            background-size: cover;
                            position: absolute;
                            top: 0px;
                            right: 0px;
                            bottom: 0px;
                            left: 0px;
                            background-color: rgba(0,0,0,0.60);
                        }
                        .info{
                            animation: fadeIn 2s;
                        }
                        `
                    }</style>
        </div>
    )
}