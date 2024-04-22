import { Title, Button } from "@/shared/ui/index"
import { MouseEventHandler } from "react";

const ErrorCard = ({text, funcReset} : {text:string, funcReset: MouseEventHandler }) => {
    return(
        <div className="flex items-center justify-center absolute h-full w-full top-0 bottom-0 bg-white border-[1px]  z-20 left-0 right-0">
            <div className='flex flex-col items-center gap-2 p-4'>
                <Title text={text} className=" text-red-700"></Title>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                </svg>
                <Button type="button" isArrowIconNeeded={false} onClick={funcReset} className="border-[1px] bg-white text-black" text='Try again'></Button>
            </div>
        </div>
    )
}

export default ErrorCard;