'use client'
import { Button } from "@/shared/uiShadcn/ui/button";
import { usePathname, useRouter } from "next/navigation";

export default function PickPage(){
    const router = useRouter()
    const pathname = usePathname()

    return(
        <div className="flex flex-col gap-2">
            
            <Button onClick={() => router.push(`${pathname}/editor`)} className="flex flex-row gap-2">
                <p>Editor</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </Button>
            <Button disabled onClick={() => router.push(`${pathname}/employees`)} className="flex flex-row gap-2">
                <p>Employees</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </Button>
            <Button disabled onClick={() => router.push(`${pathname}/news`)} className="flex flex-row gap-2">
                <p>News</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </Button>
        </div>
    )
}