'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { MutateFunction, useMutation } from "@tanstack/react-query"

import {Subtitle} from "@/shared/ui/index"





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

import { useToast } from "@/shared/uiShadcn/ui/use-toast"

import { SuccessCard, LoadingCard, ErrorCard } from "@/features/index";

import { Link, Title } from "@/shared/ui/index";
import React from "react";
import editGreeting from "../api/editGreeting"

import { useRouter } from "next/navigation"

 
const formSchema = z.object({
//   name: z.string().min(2, 'Too Short!').max(14, 'Too long!'),
  welcomeUA: z.string().min(1, '!'),
  welcomeRU: z.string().min(1, '!'),
  welcomeEN: z.string().min(1, '!'),
  welcomePL: z.string().min(1, '!'),
  missionUA: z.string().min(1, '!'),
  missionRU: z.string().min(1, '!'),
  missionEN: z.string().min(1, '!'),
  missionPL: z.string().min(1, '!'),
  firstImg: z.instanceof(File).optional(),
  secondImg: z.instanceof(File).optional(),
  
})

const FormEditGreeting = () => {
    const router = useRouter()
    const {toast} = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        welcomeUA: "",
        welcomeRU: "",
        welcomeEN: "",
        welcomePL: "",
        missionUA: "",
        missionRU: "",
        missionEN: "",
        missionPL: "",
        firstImg: undefined,
        secondImg: undefined,
      },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try{

        
        const response = await editGreeting({
            ua: {
                welcome: values.welcomeUA,
                mission: values.missionUA,
            },
            ru: {
                welcome: values.welcomeRU,
                mission: values.missionRU,
            },
            pl: {
                welcome: values.welcomePL,
                mission: values.missionPL,
            },
            en: {
                welcome: values.welcomeEN,
                mission: values.missionEN,
            },
            firstImg: values.firstImg,
            secondImg: values.secondImg
        })
        toast({
            variant: "destructive",
            title: "Nice!",
            description: "Greeting changed!"
        })
        form.reset()
        } catch(e){
            if(e == 'Unauthorized'){
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
        <div className="p-4 flex flex-col" id='edit-greeting'>
            <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-4 d-s:flex d-s:flex-col w-full mx-auto relative d-s:w-[33%]`}>
                        <FormField
                        control={form.control}
                        name="welcomeUA"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">welcome UA</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="welcomeRU"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">welcome RU</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="welcomeEN"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">welcome EN</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="welcomePL"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">welcome PL</FormLabel>
                            <FormControl>
                                <Input placeholder="text..." {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="missionUA"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">mission UA</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="missionRU"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">mission RU</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."{...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="missionEN"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">mission EN</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="missionPL"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">mission PL</FormLabel>
                            <FormControl>
                                <Input placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="firstImg"
                        render={({ field: { value, onChange, ...fieldProps } }) => (
                            <FormItem>
                            <FormLabel>first IMG</FormLabel>
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
                        <FormField
                        control={form.control}
                        name="secondImg"
                        render={({ field: { value, onChange, ...fieldProps } }) => (
                            <FormItem>
                            <FormLabel>second IMG</FormLabel>
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

export default FormEditGreeting;