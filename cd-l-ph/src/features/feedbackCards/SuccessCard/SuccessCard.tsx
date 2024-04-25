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
const SuccessCard = ({text, funcReset, isOpen} : {text:string, funcReset: any, isOpen: boolean }) => {
    return(
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Вітаємо!</AlertDialogTitle>
                <AlertDialogDescription>
                    {text}
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogAction onClick={() => funcReset()}>Закрити</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default SuccessCard;