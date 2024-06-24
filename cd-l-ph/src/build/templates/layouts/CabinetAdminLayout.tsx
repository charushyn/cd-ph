'use client'

import type { Metadata } from "next";

import { Toaster } from "@/shared/uiShadcn/ui/toaster"

import { Link } from "@/shared/ui/index";

import { iconFinder } from "../../../../public/helpers/index";

import { ThemeProvider, ReduxProvider } from "@/build/Providers/index";

export const metadata: Metadata = {
  title: "Cabinet",
  description: "Your personal cabinet",
};

export default function CabinetLayout({ children } : {children: React.ReactNode}) {
  return (
    <>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
    </>
  )
}