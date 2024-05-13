'use client'

import { iconFinder } from "../../../../public/helpers/index";
import useScrollDirection from "../hooks/useScrollDirection";

import { ScrollToComponent } from "@/shared/ui/index";

import { toggleVisibilityPopupLanguage, toggleVisibilityPopupBurger } from "@/shared/utils/index";
import { useDispatch } from "react-redux";

import { PopupBurger } from "@/widgets/index";

import { Link } from "@/shared/ui/index";

const Header = ({isBurger, isArrowBack} : {isBurger: boolean, isArrowBack: boolean}) => {
    const dispatch = useDispatch()

    const scrollDirection = useScrollDirection();

    return(
        <header className={`flex flex-row ${ scrollDirection === "down" ? "-top-[60px]" : "top-0"} transition-all duration-500 fixed w-full justify-between h-[60px] z-[50] t-s:h-[60px] items-center bg-black px-4 t-l:px-8`}>
            <div className="relative w-fit h-fit flex flex-row items-center">
            {
                isArrowBack &&
                <Link isArrowIconNeeded={true} arrowClassName="rotate-180" text="" href="/" className=" flex-row-reverse text-white p-0 d-s:p-0"></Link>
            }
            {
                !isArrowBack &&
                <ScrollToComponent
                className="bg-[none] absolute top-0 left-0 right-0 bottom-0"
                hrefElem="top"
                text=''
                ></ScrollToComponent>
            }
                {iconFinder("small-gold-logo", 'h-[20px]')}
            </div>
            <div className="flex flex-row gap-4">
                <div className='flex flex-row gap-2 items-center' onClick={() => dispatch(toggleVisibilityPopupLanguage())}>
                    {iconFinder(`flag-gb`, 'h-[16px]')}
                </div>
                {
                    isBurger &&
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white t-s:w-6 t-s:h-6" onClick={() => {dispatch(toggleVisibilityPopupBurger())}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                }
            </div>
        </header>
    )
}

export default Header;