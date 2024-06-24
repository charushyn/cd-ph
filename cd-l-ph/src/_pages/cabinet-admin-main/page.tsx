'use client'

import { PickPage } from "@/entities/index";


export default function CabinetAdminMain(){



    return(
        <div className="flex flex-col h-svh items-center justify-center">
            <div className="d-s:w-[33%] flex flex-col gap-10">
                <p className={`text-5xl`}>
                        Hello, Dima!
                </p>
                <PickPage></PickPage>
            </div>
        </div>
    )
}