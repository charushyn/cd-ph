'use client'

import { useDispatch, useSelector } from "react-redux"

import { Link, Title, ScrollToComponent } from "@/shared/ui/index"

import { toggleVisibilityPopupBurger } from "@/shared/utils/index"

export default function PopupBurger(){
    const isOpen = useSelector((state: any) => state.burgerReducer.isOpen)

    const dispatch = useDispatch()

    return(
        <div className={`w-full h-svh bg-[rgba(0,0,0,0.70)] top-0 bottom-0 right-0 left-0 z-[50] fixed ${!isOpen && 'hidden'}`} onClick={() => dispatch(toggleVisibilityPopupBurger())}>
            <div className='h-fit flex flex-col gap-4 bg-[#D3BE5F] p-4' onClick={(e) => e.stopPropagation()}>
                <div className='flex flex-row justify-between'>
                    <Title text="The Best Result" className=""></Title>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 t-s:w-8 t-s:h-8" onClick={() => dispatch(toggleVisibilityPopupBurger())}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <hr className=" bg-black h-[1px] border-0"></hr>
                <ScrollToComponent className="bg-[none] decoration-[0.5px] underline p-0 t-s:decoration-[1px] t-l:p-0 t-x:p-0" normalcase text={'Our Services'} hrefElem="services" onClick={() => dispatch(toggleVisibilityPopupBurger())}></ScrollToComponent>
                <ScrollToComponent className="bg-[none] decoration-[0.5px] underline p-0 t-s:decoration-[1px] t-l:p-0 t-x:p-0" normalcase text={'FAQ'} hrefElem="faq" onClick={() => dispatch(toggleVisibilityPopupBurger())}></ScrollToComponent>
                <ScrollToComponent className="bg-[none] decoration-[0.5px] underline p-0 t-s:decoration-[1px] t-l:p-0 t-x:p-0" normalcase text={'Why we?'} hrefElem="whywe" onClick={() => dispatch(toggleVisibilityPopupBurger())}></ScrollToComponent>
                <ScrollToComponent className="bg-[none] decoration-[0.5px] underline p-0 t-s:decoration-[1px] t-l:p-0 t-x:p-0" normalcase text={'Opinions'} hrefElem="opinions" onClick={() => dispatch(toggleVisibilityPopupBurger())}></ScrollToComponent>
                <ScrollToComponent className="bg-[none] decoration-[0.5px] underline p-0 t-s:decoration-[1px] t-l:p-0 t-x:p-0" normalcase text={'Contact us'} hrefElem="feedbackform" onClick={() => dispatch(toggleVisibilityPopupBurger())}></ScrollToComponent>
                <ScrollToComponent className="bg-[none] decoration-[0.5px] underline p-0 t-s:decoration-[1px] t-l:p-0 t-x:p-0" normalcase text={'Our location'} hrefElem="footer" onClick={() => dispatch(toggleVisibilityPopupBurger())}></ScrollToComponent>
            </div>
        </div>
    )
}