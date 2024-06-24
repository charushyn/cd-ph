'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { object, z } from "zod"

import {encode, decode} from "js-base64"


import { MutateFunction, useMutation } from "@tanstack/react-query"

import {Subtitle} from "@/shared/ui/index"

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
import addWhyWe from "../api/addWhyWe"

 
const formSchema = z.object({
//   name: z.string().min(2, 'Too Short!').max(14, 'Too long!'),
    titleUA: z.string().min(1, '!'),
    titleRU: z.string().min(1, '!'),
    titleEN: z.string().min(1, '!'),
    titlePL: z.string().min(1, '!'),
    descriptionUA: z.string().min(1, '!'),
    descriptionRU: z.string().min(1, '!'),
    descriptionEN: z.string().min(1, '!'),
    descriptionPL: z.string().min(1, '!'),
    svg: z.instanceof(File)
  
})

const FormAddWhyWe = () => {
    const {toast} = useToast()
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        titleUA: "",
        titleRU: "",
        titleEN: "",
        titlePL: "",
        descriptionUA: "",
        descriptionRU: "",
        descriptionEN: "",
        descriptionPL: "",
        svg: undefined
      },
    })


    async function onSubmit(values: z.infer<typeof formSchema>) {

        
        try{
            const response = await addWhyWe({
                ua: {
                    title: values.titleUA,
                    description: values.descriptionUA
                },
                ru: {
                    title: values.titleRU,
                    description: values.descriptionRU
                },
                pl: {
                    title: values.titlePL,
                    description: values.descriptionPL
                },
                en: {
                    title: values.titleEN,
                    description: values.descriptionEN
                },
                svg: values.svg
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
                        name="titleUA"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">Title UA</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="titleRU"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">Title RU</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="titleEN"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">Title EN</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="titlePL"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">Title PL</FormLabel>
                            <FormControl>
                                <Input placeholder="text..." {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="descriptionUA"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">description UA</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="descriptionRU"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">description RU</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."{...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="descriptionEN"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">description EN</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="descriptionPL"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">description PL</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="svg"
                        render={({ field: { value, onChange, ...fieldProps } }) => (
                            <FormItem>
                            <FormLabel>Icon SVG</FormLabel>
                            <FormControl>
                                <Input
                                {...fieldProps}
                                placeholder="ICON"
                                type="file"
                                accept="image/*, application/pdf"
                                onChange={(event) =>
                                    onChange(event.target.files && event.target.files[0])
                                }
                                />
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

export default FormAddWhyWe;