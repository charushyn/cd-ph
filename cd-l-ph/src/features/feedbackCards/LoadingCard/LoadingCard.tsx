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

const ErrorCard = ({text, isOpen} : {text:string, isOpen: boolean }) => {
    return(
        <AlertDialog open={isOpen}>
            <AlertDialogContent className=" flex justify-center">
                <AlertDialogHeader>
                <AlertDialogTitle>{text}</AlertDialogTitle>
                <AlertDialogDescription>
                <BarLoader className="bg-white"></BarLoader>
                </AlertDialogDescription>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ErrorCard;

