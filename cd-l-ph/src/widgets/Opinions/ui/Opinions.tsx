'use server'


import { ReviewBlock } from '@/features';

import React from 'react'
import { Title, ALink, Subtitle } from '@/shared/ui/index';

import CountUp from 'react-countup';

import { useTranslations } from 'next-intl';
import getImg from '@/shared/utils/img/getImg';
import CarouselClient from '@/features/Carousel/ui/CarouselClient';


const Opinions = async ({data, bool, title, button, href} : {data: any, bool: boolean, title: string, button:string, href:string}) => {
    
      return(
      <div className='font-OpenSans' id='opinions'>
        <Title text={title} className="text-sm bg-white   h-[50px] flex items-center px-4 t-l:px-8 relative"></Title>
        <div className='h-svh flex flex-col p-4 t-x:p-8 justify-center relative'>
                <div className='flex flex-col gap-4 d-s:w-[70%] w-full justify-center mx-auto'>
                  {!data.error ? 
                  <CarouselClient>
                    {data.map((item: any) => {
                            return(
                              <ReviewBlock id={item.id} position={item.position} bool={bool} description={item.description} avatar={item.img} name={item.name}></ReviewBlock>
                            )
                    })}
                  </CarouselClient>
                  : ''}
                  <ALink href={href} text={button} className='bg-white text-black border-[1px] rounded-3xl self-end' isArrowIconNeeded={true}></ALink>
                </div>
                
            </div>
      </div>
      )
}
export default Opinions;
