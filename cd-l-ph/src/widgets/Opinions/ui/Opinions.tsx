'use client'


import reviews from '../api/reviews';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { ReviewBlock } from '@/features';

import React from 'react'
import { Title, ALink } from '@/shared/ui/index';

import CountUp from 'react-countup';

const Opinions = () => {
    const countRef = React.useRef(null)
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 600 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
      <div className='' id='opinions'>
        <Title text={'Opinions'} className="bg-white z-[10] h-[70px] flex items-center px-4 t-l:px-8"></Title>
        <div className='flex flex-col z-[1] relative p-4 t-l:flex-row t-l:p-8 gap-y-4 text-white t-l:justify-between'>
          <div className='overlay z-[0]'></div>
          <div className=' bg-photo z-[-1]'></div>
          <div className=' flex flex-col gap-2 relative t-s:w-[50%] t-l:w-[40%]'>
            <Title text={'The Best Result'} className="z-[10] font-bold h-[70px] flex items-center text-white"></Title>
            <p className='text-xs t-s:text-sm t-m:text-base t-x:text-lg leading-4'>Ponad <span className='text-sm t-s:text-base t-m:text-lg t-x:text-xl font-bold'>25 lat</span> temu, kiedy zakładaliśmy Leasing Polski przyświecał nam jeden cel:<br></br> wspierać polskiego przedsiębiorcę!</p>
            <ALink
            isHoverEffect={true}
              href='https://www.google.com/maps/place/The+Best+Result+-+Biuro+Rachunkowe+Ksi%C4%99gowe+Leasing+Ubezpieczenia+Warszawa+%D0%91%D1%83%D1%85%D0%B3%D0%B0%D0%BB%D1%82%D0%B5%D1%80%D1%96%D1%8F+%D0%A1%D1%82%D1%80%D0%B0%D1%85%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F+%D0%9B%D1%96%D0%B7%D0%B8%D0%BD%D0%B3+%D0%86%D0%BF%D0%BE%D1%82%D0%B5%D0%BA%D0%B0+%D0%9F%D0%BE%D0%BB%D1%8C%D1%89%D0%B0/@52.2700317,21.0449526,17z/data=!4m8!3m7!1s0x471ecd3b7061cd29:0x282dcd5a6166385!8m2!3d52.2700284!4d21.0475275!9m1!1b1!16s%2Fg%2F11vwn_01wk?entry=ttu'
              text='opinions'
              isArrowIconNeeded={true}
              className='text-white flex-row hidden t-l:flex t-l:absolute t-l:left-0 t-l:bottom-0'
              ></ALink>
          </div>
          <div className='flex flex-col  gap-4 relative t-s:w-[50%] t-l:w-[40%]'>
            <p className='text-xs t-s:text-sm t-m:text-base t-x:text-lg leading-4 t-l:mt-[70px]' ref={countRef}>Понад <CountUp className='text-sm t-s:text-base t-m:text-lg t-x:text-xl leading-4 font-bold' enableScrollSpy={true} scrollSpyOnce={true} end={1290} duration={3} delay={2} start={0}></CountUp> наших клієнтів зі всієї Польщі залишились задоволеними після наших послуг!</p>
            <ALink
              isHoverEffect={true}
              href='https://www.google.com/maps/place/The+Best+Result+-+Biuro+Rachunkowe+Ksi%C4%99gowe+Leasing+Ubezpieczenia+Warszawa+%D0%91%D1%83%D1%85%D0%B3%D0%B0%D0%BB%D1%82%D0%B5%D1%80%D1%96%D1%8F+%D0%A1%D1%82%D1%80%D0%B0%D1%85%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F+%D0%9B%D1%96%D0%B7%D0%B8%D0%BD%D0%B3+%D0%86%D0%BF%D0%BE%D1%82%D0%B5%D0%BA%D0%B0+%D0%9F%D0%BE%D0%BB%D1%8C%D1%89%D0%B0/@52.2700317,21.0449526,17z/data=!4m8!3m7!1s0x471ecd3b7061cd29:0x282dcd5a6166385!8m2!3d52.2700284!4d21.0475275!9m1!1b1!16s%2Fg%2F11vwn_01wk?entry=ttu'
              text='opinions'
              isArrowIconNeeded={true}
              className='text-white justify-center items-center t-l:hidden'
              ></ALink>
              <div className=''>
                <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                arrows={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                >
                {
                reviews.map((review) => {
                  return(
                      <ReviewBlock
                      avatar={review.avatar}
                      title={review.title}
                      hardCodeColorBg={review.hardCodeColorBg}
                      srcToOpinion={review.srcToOpinion}
                      description={review.description}
                      key={review.title}
                      >
                      </ReviewBlock>
                          )
                      })
                  }
                </Carousel>
              </div>
          </div>
        </div>
        <style jsx>{
                            `
                            .bg-photo {
                              background-image: url('https://img.freepik.com/free-photo/people-business-meeting-high-angle_23-2148911819.jpg');
                              background-size: cover;
                              position: absolute;
                              top: 0px;
                              right: 0px;
                              bottom: 0px;
                              left: 0px;
                              background-repeat: no-repeat;
                              background-position: center;
                          }
                            .overlay {    
                                width: 100%;
                                height: 100%;
                                background-size: cover;
                                position: absolute;
                                top: 0px;
                                right: 0px;
                                bottom: 0px;
                                left: 0px;
                                
                                background-color: rgba(0,0,0,0.60);
                            }
                            `
                        }</style>
      </div>
      )
}
export default Opinions;