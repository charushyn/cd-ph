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
  import { useTranslations } from "next-intl";
import { MouseEventHandler } from "react";
const SuccessCard = ({funcReset, isOpen} : {funcReset: any, isOpen: boolean }) => {
    const t = useTranslations("feedbackcards")
    return(
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>{t("success.title")}</AlertDialogTitle>
                <AlertDialogDescription>
                    {t("success.description")}
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogAction onClick={() => funcReset()}>{t("success.exit")}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default SuccessCard;