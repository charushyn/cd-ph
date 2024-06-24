'use client'

import { cn } from '@/shared/utils'
import {ReactTyped}  from 'react-typed'

export default function Typed({text, className}:{text:string, className?:string}){
    return(
        <ReactTyped
            className={cn(className, "")}
            strings={[
                    text
            ]}
            typeSpeed={50}
            backSpeed={50}
            loop
        ></ReactTyped>
    )
}