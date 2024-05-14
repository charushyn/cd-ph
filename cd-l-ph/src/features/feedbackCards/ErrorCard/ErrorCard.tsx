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
  import { useTranslations } from "next-intl";
  import React from "react";

import { MouseEventHandler } from "react";
const ErrorCard = ({text, funcReset, isOpen} : {text:string | undefined, funcReset: any, isOpen: boolean }) => {
    const t = useTranslations("feedbackcards")
    return(
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>{t("failed.title")}</AlertDialogTitle>
                <AlertDialogDescription>
                    {text}
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogAction onClick={() => funcReset()}>{t("failed.exit")}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ErrorCard;