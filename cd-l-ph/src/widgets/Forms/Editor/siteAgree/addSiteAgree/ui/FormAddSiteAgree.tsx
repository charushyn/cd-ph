'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { object, z } from "zod"

import {encode, decode} from "js-base64"


import { MutateFunction, useMutation } from "@tanstack/react-query"

import {Subtitle} from "@/shared/ui/index"

import addService from "../api/addSiteAgree"

import { useToast } from "@/shared/uiShadcn/ui/use-toast"

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];



import validator from 'validator';


import { Button } from "@/shared/uiShadcn/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/uiShadcn/ui/form"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/uiShadcn/ui/select'
import { Textarea } from "@/shared/uiShadcn/ui/textarea";
import { Input } from "@/shared/uiShadcn/ui/input"

import { SuccessCard, LoadingCard, ErrorCard } from "@/features/index";
import { useSelector, useDispatch } from "react-redux"

import { Link, Title } from "@/shared/ui/index";
import React from "react";
import { useLocale } from "next-intl"
import { useRouter } from "next/navigation"
import { cookies } from "next/headers"
import { deleteCookie } from "@/shared/utils/cookie/cookie"

 
const formSchema = z.object({
//   name: z.string().min(2, 'Too Short!').max(14, 'Too long!'),
    textUA: z.string().min(1, '!'),
    textRU: z.string().min(1, '!'),
    textPL: z.string().min(1, '!'),
    textEN: z.string().min(1, '!'),
    src: z.string().min(1, '!')
})

const FormAddSiteAgree = () => {
    const {toast} = useToast()
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        textUA: '',
        textEN: '',
        textPL: '',
        textRU: '',
        src: ''
      },
    })


    async function onSubmit(values: z.infer<typeof formSchema>) {

        
        try{
            const response = await addService({
                ua: {
                    text: values.textUA,
                    src: values.src
                },
                ru: {
                    text: values.textRU,
                    src: values.src
                },
                pl: {
                    text: values.textPL,
                    src: values.src
                },
                en: {
                    text: values.textEN,
                    src: values.src
                }
            })
            toast({
                variant: "default",
                title: "Good job!",
                description: "Service was added!"
            })

            form.reset()

        } catch(err){
            if(err == 'Unauthorized'){
                return router.push('/login')
            }
            toast({
                variant: "destructive",
                title: "Try again!",
                description: "Service was not added!"
            })
        }
    }
    

    


    return (
        <div className="p-4 flex flex-col" id='add-service'>
            <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-4 d-s:flex d-s:flex-col w-full mx-auto relative d-s:w-[33%]`} >
                        <FormField
                        control={form.control}
                        name="textUA"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">text UA</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="textRU"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">text RU</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="textEN"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">text EN</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="textPL"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">text PL</FormLabel>
                            <FormControl>
                                <Input placeholder="text..." {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                                                <FormField
                        control={form.control}
                        name="src"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">link</FormLabel>
                            <FormControl>
                                <Input placeholder="text..." {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" className="w-full ">Submit</Button>
                    </form>
            </Form>
        </div>
      )
    }

export default FormAddSiteAgree;