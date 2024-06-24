'use server'


import { ReviewBlock } from '@/features';

import React from 'react'
import { Title, ALink, Subtitle } from '@/shared/ui/index';

import CountUp from 'react-countup';

import { useTranslations } from 'next-intl';
import getImg from '@/shared/utils/img/getImg';
import CarouselClient from '@/features/Carousel/ui/CarouselClient';


const Opinions = async ({data, bool} : {data: any, bool: boolean}) => {
    
      return(
      <div className='font-OpenSans' id='opinions'>
        {/* <Title text={t("title")} className="text-sm bg-white   h-[50px] flex items-center px-4 t-l:px-8 relative"></Title> */}
        <div className='h-svh flex flex-col p-4 t-x:p-8 justify-center relative'>
                <div className='flex flex-col gap-4 d-s:w-[70%] w-full justify-center mx-auto'>
                  {!data.error ? 
                  <CarouselClient>
                    {data.map(async (item: any) => {
                            let imgBase64 = Buffer.from(((await getImg(item.img)).data),
                                "binary" ).toString("base64");
            
                            let img =`data:image/png;base64,${imgBase64}`
                            return(
                              <ReviewBlock id={item.id} position={item.position} bool={bool} description={item.description} avatar={img} name={item.name}></ReviewBlock>
                            )
                    })}
                  </CarouselClient>
                  : ''}
                  <ALink href='https://www.google.pl/maps/place/The+Best+Result+-+Biuro+Rachunkowe+Ksi%C4%99gowe+Leasing+Ubezpieczenia+Warszawa+%D0%91%D1%83%D1%85%D0%B3%D0%B0%D0%BB%D1%82%D0%B5%D1%80%D1%96%D1%8F+%D0%A1%D1%82%D1%80%D0%B0%D1%85%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F+%D0%9B%D1%96%D0%B7%D0%B8%D0%BD%D0%B3+%D0%86%D0%BF%D0%BE%D1%82%D0%B5%D0%BA%D0%B0+%D0%9F%D0%BE%D0%BB%D1%8C%D1%89%D0%B0/@52.2700317,21.0449526,17z/data=!4m8!3m7!1s0x471ecd3b7061cd29:0x282dcd5a6166385!8m2!3d52.2700284!4d21.0475275!9m1!1b1!16s%2Fg%2F11vwn_01wk?entry=ttu' text={''} className='bg-white text-black border-[1px] rounded-3xl self-end' isArrowIconNeeded={true}></ALink>
                </div>
                
            </div>
      </div>
      )
}
export default Opinions;
