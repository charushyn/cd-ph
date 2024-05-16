'use client'

import { BarLoader } from "@/entities/index";
import React from "react";

const Loading = ({ children } : {children: React.ReactNode}) => {
    return(
        
        <React.Suspense fallback={
            <div className="flex absolute h-svh w-full items-center justify-center z-[100] top-0 bottom-0 left-0 right-0 bg-white border-[1px]">
                <BarLoader className="bg-white"></BarLoader>
            </div>
        }>{children}</React.Suspense>
    )
}

export default Loading;