

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shared/uiShadcn/ui/dropdown-menu"
import { CabinetAdminLayout } from "../templates/index"
import { Button } from "@/shared/uiShadcn/ui/button"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export default function CabinetAdmin({children} : {children: React.ReactNode}){

    return(
        <CabinetAdminLayout>
            {children}
        </CabinetAdminLayout>
    )
}