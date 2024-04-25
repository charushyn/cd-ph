'use client'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/shared/uiShadcn/ui/alert-dialog"

  import React from "react";

import { MouseEventHandler } from "react";
const ErrorCard = ({text, funcReset, isOpen} : {text:string | undefined, funcReset: any, isOpen: boolean }) => {
    return(
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Щось пішло не так...</AlertDialogTitle>
                <AlertDialogDescription>
                    {text}
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogAction onClick={() => funcReset()}>Спробувати ще раз</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ErrorCard;