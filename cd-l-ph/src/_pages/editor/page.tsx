"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/shared/uiShadcn/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/uiShadcn/ui/dropdown-menu"


import { FormAddFAQ, FormAddService, FormDeleteService, FormEditService, FormAddOpinion, FormDeleteFAQ, FormDeleteOpinion, FormEditFAQ, FormEditGreeting, FormEditOpinion } from "@/widgets/Forms/Editor/index"

import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/shared/uiShadcn/ui/menubar"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/uiShadcn/ui/dialog"
import { Input } from "@/shared/uiShadcn/ui/input"
import { Label } from "@/shared/uiShadcn/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { useSelector, useDispatch } from "react-redux";

import { refresh } from "@/shared/utils/index";
import FormAddWhyWe from "@/widgets/Forms/Editor/WhyWe/addWhyWe/ui/FormAddWhyWe"
import FormEditWhyWe from "@/widgets/Forms/Editor/WhyWe/editWhyWe/ui/FormEditWhyWe"
import FormDeleteWhyWe from "@/widgets/Forms/Editor/WhyWe/deleteWhyWe/ui/FormDeleteWhyWe"
import { FormEditWorkDay } from "@/widgets/Forms/Editor/Schedule/editWorkDay/ui/FormEditWorkDay"
import FormEditMap from "@/widgets/Forms/Editor/Map/editMap/ui/FormEditMap"
import FormEditSiteAgree from "@/widgets/Forms/Editor/siteAgree/editSiteAgree/ui/FormEditSiteAgree"
import FormDeleteSiteAgree from "@/widgets/Forms/Editor/siteAgree/deleteSiteAgree/ui/FormDeleteSiteAgree"
import FormAddSiteAgree from "@/widgets/Forms/Editor/siteAgree/addSiteAgree/ui/FormAddSiteAgree"
import FormAddSocialMedia from "@/widgets/Forms/Editor/SocialMedia/addSocialMedia/addService/ui/FormAddSocialMedia"
import FormEditSocialMedia from "@/widgets/Forms/Editor/SocialMedia/editSocialMedia/ui/FormEditSocialMedias"
import FormDeleteSocialMedia from "@/widgets/Forms/Editor/SocialMedia/deleteSocialMedia/ui/FormDeleteSocialMedia"
import FormEditLogo from "@/widgets/Forms/Editor/editOtherPhoto/editLogo/ui/editFeedbackForm"
import FormEditFeedbackPhoto from "@/widgets/Forms/Editor/editOtherPhoto/editFeedbackForm/ui/editFeedbackForm"
 
export default function Editor(){

    const {setTheme, resolvedTheme} = useTheme()
    const router = useRouter()

    return(
        <main className="flex flex-col">
            <div className="h-[60px] flex justify-between items-center px-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white" onClick={() => {
                    router.push('/cabinet-admin')
                }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                        <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <Menubar className="d-s:px-8 flex-wrap h-fit gap-2">
            <MenubarMenu>
                <MenubarTrigger>Services</MenubarTrigger>
                <MenubarContent>
                <MenubarItem className="">
                    <a href={'#add-service'}>
                    Add Service
                    </a>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem className="">
                    <a href={'#edit-service'}>
                    Edit Service
                    </a>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem className="">
                    <a href={'#delete-service'}>
                    Delete Service
                    </a>
                </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Greeting</MenubarTrigger>
                <MenubarContent>
                <MenubarItem className="">
                    <a href={'#edit-greeting'}>
                    Edit greeting
                    </a>
                </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>FAQ</MenubarTrigger>
                <MenubarContent>
                <MenubarItem className="">
                    <a href={'#add-faq'}>
                    Add FAQ
                    </a>
                </MenubarItem>
                <MenubarItem className="">
                    <a href={'#edit-faq'}>
                    Edit FAQ
                    </a>
                </MenubarItem>
                <MenubarItem className="">
                    <a href={'#delete-faq'}>
                    Delete FAQ
                    </a>
                </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Opinions</MenubarTrigger>
                <MenubarContent>
                <MenubarItem className="">
                    <a href={'#add-opinion'}>
                    Add Opinion
                    </a>
                </MenubarItem>
                <MenubarItem className="">
                    <a href={'#edit-opinion'}>
                    Edit Opinion
                    </a>
                </MenubarItem>
                <MenubarItem className="">
                    <a href={'#delete-opinion'}>
                    Delete Opinion
                    </a>
                </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Footer</MenubarTrigger>
                <MenubarContent>
                <MenubarRadioGroup value="benoit">
                    <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                    <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                    <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarSeparator />
                <MenubarItem inset>Edit...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Add Profile...</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            </Menubar>
            <div className="px-8 ">
                <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} pt-8 text-5xl`}>
                    Hello, Dima!
                </p>
            </div>
            <div className="flex flex-col px-8">
                <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-5xl underline`}>
                    Services
                </p>
                <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                        Add new service
                    </p>
                    <FormAddService></FormAddService>
                </div>
                <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                        Delete service
                    </p>
                    <FormDeleteService></FormDeleteService>
                </div>
                <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                        Edit service
                    </p>
                    <FormEditService></FormEditService>
                </div>
            </div>
            <div className="flex flex-col px-8">
                <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-5xl underline`}>
                    FAQ
                </p>
                <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                        Add new FAQ
                    </p>
                    <FormAddFAQ></FormAddFAQ>
                </div>
                <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                        Edit FAQ
                    </p>
                    <FormEditFAQ></FormEditFAQ>
                </div>
                <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                        Delete FAQ
                    </p>
                    <FormDeleteFAQ></FormDeleteFAQ>
                </div>
            </div>
            <div className="flex flex-col px-8">
                <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-5xl underline`}>
                    Opinions
                </p>
                <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                        Add new Opinion
                    </p>
                    <FormAddOpinion></FormAddOpinion>
                </div>
                <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                        Edit Opinion
                    </p>
                    <FormEditOpinion></FormEditOpinion>
                </div>
                <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                        Delete Opinion
                    </p>
                    <FormDeleteOpinion></FormDeleteOpinion>
                </div>
            </div>
            <div className="flex flex-col px-8">
                <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-5xl underline`}>
                    Greeting
                </p>
                <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                        Edit greeting
                    </p>
                    <FormEditGreeting></FormEditGreeting>
                </div>
                <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-5xl underline`}>
                    WhyWe
                </p>
                <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                        Add New WhyWe
                    </p>
                    <FormAddWhyWe></FormAddWhyWe>
                </div>
                <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                        Edit WhyWe
                    </p>
                    <FormEditWhyWe></FormEditWhyWe>
                </div>
                <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                        Delete WhyWe
                    </p>
                    <FormDeleteWhyWe></FormDeleteWhyWe>
                </div>
                <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-5xl underline`}>
                    Schedule
                </p>
                <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                            Edit Schedule
                    </p>
                    <FormEditWorkDay></FormEditWorkDay>
                </div>
                <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-5xl underline`}>
                    Map
                </p>
                <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                            Edit map
                    </p>
                    <FormEditMap></FormEditMap>
                </div>
                <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-5xl underline`}>
                    Site agree
                </p>
                <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                            Add site agree
                    </p>
                    <FormAddSiteAgree></FormAddSiteAgree>
                </div>
                <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                            Edit Site agree
                    </p>
                    <FormEditSiteAgree></FormEditSiteAgree>
                </div>
                <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                            Delete Site agree
                    </p>
                    <FormDeleteSiteAgree></FormDeleteSiteAgree>
                </div>
                <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-5xl underline`}>
                    Social media
                </p>
                <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                            Add social media
                    </p>
                    <FormAddSocialMedia></FormAddSocialMedia>
                </div>
                <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                            Edit social media
                    </p>
                    <FormEditSocialMedia></FormEditSocialMedia>
                </div>
                <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                            Delete social media
                    </p>
                    <FormDeleteSocialMedia></FormDeleteSocialMedia>
                </div>
                <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-5xl underline`}>
                    Other
                </p>
                {/* <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                            Edit Feedback Form Img
                    </p>
                    <FormEditFeedbackPhoto></FormEditFeedbackPhoto>
                </div>
                <div className="">
                    <p className={`${resolvedTheme === 'light' ? 'text-black' : 'text-white'} py-8 text-3xl text-center`}>
                            Edit Logo
                    </p>
                    <FormEditLogo></FormEditLogo>
                </div> */}
            </div>
        </main>
    )
}