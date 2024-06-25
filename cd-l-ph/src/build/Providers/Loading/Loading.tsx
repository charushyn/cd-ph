import { BarLoader } from "@/entities/index";
import { Title } from "@/shared/ui/index";
import React from "react";

const Loading = ({ children } : {children: React.ReactNode}) => {
    return(
        
        <React.Suspense fallback={
            <div className="flex flex-col gap-2 absolute h-svh w-full items-center justify-center z-[100] top-0 bottom-0 left-0 right-0 bg-black border-[1px]">
                <div className="flex flex-row gap-2">
                    <BarLoader className="" delay={0}></BarLoader>
                    <BarLoader className="" delay={0.1}></BarLoader>
                    <BarLoader className="" delay={0.2}></BarLoader>
                </div>
            </div>
            
        }>{children}</React.Suspense>
    )
}

export default Loading;