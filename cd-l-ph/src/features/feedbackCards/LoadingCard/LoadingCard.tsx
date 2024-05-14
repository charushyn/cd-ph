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

import { BarLoader } from "@/entities/index";

import React from "react";

import { useTranslations } from "next-intl";

const ErrorCard = ({isOpen} : {isOpen: boolean }) => {
    const t = useTranslations("feedbackcards")
    return(
        <AlertDialog open={isOpen}>
            <AlertDialogContent className=" flex justify-center">
                <AlertDialogHeader>
                <AlertDialogTitle>{t("loading.title")}</AlertDialogTitle>
                <AlertDialogDescription>
                <BarLoader className="bg-white"></BarLoader>
                </AlertDialogDescription>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ErrorCard;

