'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { object, z } from "zod"

import {encode, decode} from "js-base64"


import { MutateFunction, useMutation } from "@tanstack/react-query"

import {Subtitle} from "@/shared/ui/index"

import addSocialMedia from "../api/addSocialMedia"

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
    text: z.string().min(1, '!'),
    src: z.string().min(1, '!'),
    svg: z.instanceof(File),
})

const FormAddSocialMedia = () => {
    const {toast} = useToast()
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        text: "",
        src: "",
        svg: undefined
      },
    })


    async function onSubmit(values: z.infer<typeof formSchema>) {

        
        try{
            const response = await addSocialMedia({
                ua: {
                    text: values.text,
                    src: values.src
                },
                ru: {
                    text: values.text,
                    src: values.src
                },
                pl: {
                    text: values.text,
                    src: values.src
                },
                en: {
                    text: values.text,
                    src: values.src
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
                    <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-4 d-s:flex d-s:flex-col w-full mx-auto relative d-s:w-[33%]`} id='add-social-media' >
                        <FormField
                        control={form.control}
                        name="text"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">Text?</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
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
                            <FormLabel className="">SRC to service</FormLabel>
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

export default FormAddSocialMedia