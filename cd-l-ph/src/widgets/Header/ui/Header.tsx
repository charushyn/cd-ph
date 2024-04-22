'use client'

import { iconFinder } from "../../../../public/helpers/index";
import { useSelector } from "react-redux";

import { ScrollToComponent } from "@/shared/ui/index";

import { toggleVisibilityPopupLanguage, toggleVisibilityPopupBurger } from "@/shared/utils/index";
import { useDispatch } from "react-redux";

const Header = () => {
    const currentLanguage = useSelector((state: any) => state.languageReducer.currentLanguage)
    const dispatch = useDispatch()

    return(
        <header className="flex flex-row fixed w-full justify-between h-[60px] z-[50] t-s:h-[60px] items-center bg-black px-4 t-l:px-8">
            <div className="relative w-fit h-fit">
                <ScrollToComponent
                className="bg-[none] absolute top-0 left-0 right-0 bottom-0"
                hrefElem="top"
                text=''
                ></ScrollToComponent>
                {iconFinder("small-gold-logo", 'h-[20px]')}
            </div>
            <div className="flex flex-row gap-4">
                <div className='flex flex-row gap-2 items-center' onClick={() => dispatch(toggleVisibilityPopupLanguage())}>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 t-s:w-5 t-s:h-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg> */}
                    {iconFinder("flag-gb", 'h-[16px]')}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white t-s:w-6 t-s:h-6" onClick={() => dispatch(toggleVisibilityPopupBurger())}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </header>
    )
}

export default Header;