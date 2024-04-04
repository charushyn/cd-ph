'use client'

import { useDispatch, useSelector } from "react-redux"

import { Link } from "@/shared/ui/index"

import { toggleVisibilityPopupBurger } from "@/shared/utils/index"

export default function PopupBurger(){
    const isOpen = useSelector((state: any) => state.burgerReducer.isOpen)

    const dispatch = useDispatch()

    return(
        <div className={`w-full h-svh bg-[rgba(0,0,0,0.70)] top-0 bottom-0 right-0 left-0 z-[50] fixed ${!isOpen && 'hidden'}`} onClick={() => dispatch(toggleVisibilityPopupBurger())}>
            <div className='h-fit flex flex-col gap-4 bg-[#D3BE5F] p-4' onClick={(e) => e.stopPropagation()}>
                <div className='flex flex-row justify-between'>
                    <p>top</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" onClick={() => dispatch(toggleVisibilityPopupBurger())}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <Link href={'/login'} text={'Login'} className='cursor-pointer text-white'></Link>
            </div>
        </div>
    )
}