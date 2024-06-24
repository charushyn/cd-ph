'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { MutateFunction, useMutation } from "@tanstack/react-query"

import {Subtitle} from "@/shared/ui/index"

import addOpinion from "../api/addOpinion"

import { useRouter } from "next/navigation"

import { useToast } from "@/shared/uiShadcn/ui/use-toast"



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

import { Link, Title } from "@/shared/ui/index";
import React from "react";
import { useLocale } from "next-intl"

 
const formSchema = z.object({
  name: z.string().min(1, '!'),
  img: z.instanceof(File),
  descriptionUA: z.string().min(1, '!'),
  descriptionRU: z.string().min(1, '!'),
  descriptionPL: z.string().min(1, '!'),
  descriptionEN: z.string().min(1, '!'),
  positionUA: z.string().min(1, '!'),
  positionRU: z.string().min(1, '!'),
  positionEN: z.string().min(1, '!'),
  positionPL: z.string().min(1, '!'),
  
})

const FormAddOpinion = () => {
    const router = useRouter()
    const {toast} = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        img: undefined,
        descriptionUA: "",
        descriptionEN: "",
        descriptionPL: "",
        descriptionRU: "",
        positionUA: "",
        positionEN: "",
        positionPL: "",
        positionRU: ""
      },
    })


    async function onSubmit(values: z.infer<typeof formSchema>) {
        try{
            await addOpinion({
                ua: {
                    description: values.descriptionUA,
                    position: values.positionUA,
                    name: values.name
                },
                ru: {
                    description: values.descriptionRU,
                    position: values.positionRU,
                    name: values.name
                },
                pl: {
                    description: values.descriptionPL,
                    position: values.positionPL,
                    name: values.name
                },
                en: {
                    description: values.descriptionEN,
                    position: values.positionEN,
                    name: values.name
                },
                img: values.img
            })

            toast({
                variant: "default",
                title: "Good job!",
                description: "Opinion was added!"
            })

            form.reset()

        } catch(err){
            if(err == 'Unauthorized'){
                return router.push('/login')
            }
            toast({
                variant: "destructive",
                title: "Try again!",
                description: "Opinion was not added!"
            })
        }
    }
    

    


    return (
        <div className="p-4 flex flex-col" id='add-opinion'>
            <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-4 d-s:flex d-s:flex-col w-full mx-auto relative d-s:w-[33%]`}>
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">What's name has client?</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="img"
                        render={({ field: { value, onChange, ...fieldProps } }) => (
                            <FormItem>
                            <FormLabel>IMG of Person</FormLabel>
                            <FormControl>
                                <Input
                                {...fieldProps}
                                placeholder="IMG"
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
                        <FormField
                        control={form.control}
                        name="descriptionEN"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">Description EN</FormLabel>
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
                            <FormLabel className="">Description PL</FormLabel>
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
                            <FormLabel className="">Description RU</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
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
                            <FormLabel className="">Description UA</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="positionUA"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">Position UA</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="positionRU"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">Position RU</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="positionEN"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">Position EN</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="positionPL"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">Position PL</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
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

export default FormAddOpinion;