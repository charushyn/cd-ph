'use client'

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';


export default function CarouselClient({children} : {children: React.ReactNode}){
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
        <Carousel
                  responsive={responsive}
                  swipeable={true}
                  draggable={false}
                  arrows={true}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={4000}
                  customRightArrow={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black absolute right-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                  }
                  customLeftArrow={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute left-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                  }
                  >
                  {children}
                  </Carousel>
    )
}