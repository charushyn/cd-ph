'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { set, useForm } from "react-hook-form"
import { z } from "zod"

import { useRouter } from "next/navigation"


import { MutateFunction, useMutation } from "@tanstack/react-query"

import {Subtitle} from "@/shared/ui/index"

import { useToast } from "@/shared/uiShadcn/ui/use-toast"



import { Checkbox } from "@/shared/uiShadcn/ui/checkbox"

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
import React, { useEffect } from "react";
import editService from "../api/editSiteAgree"
import findService from "../api/findSiteAgree"
import { useLocale } from "next-intl"
import findSiteAgree from "../api/findSiteAgree"
import editSiteAgree from "../api/editSiteAgree"

 
const formSchema = z.object({
    textUA: z.string().min(1, '!'),
    textRU: z.string().min(1, '!'),
    textEN: z.string().min(1, '!'),
    textPL: z.string().min(1, '!'),
    src: z.string().min(1, '!'),
})

const formSchemaID = z.object({
        id: z.string().min(1, 'ID!'),     
    })

const FormEditSiteAgree = () => {
    const router = useRouter()
    const {toast} = useToast()
    const formID = useForm<z.infer<typeof formSchemaID>>({
      resolver: zodResolver(formSchemaID),
      defaultValues: {
        id: "",
      },
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            textUA: "",
            textPL: "",
            textRU: "",
            textEN: "",
            src: "",
        }
    })
    const [isServiceExist, setIsServiceExist] = React.useState(false)
    const [data, setData] = React.useState<any[]>([]);
    const [ID, setID] = React.useState('')


    async function onSearch(valuesID: z.infer<typeof formSchemaID>){
        try{
            const service_ua = await findSiteAgree('ua', +valuesID.id)
            const service_ru = await findSiteAgree('ru', +valuesID.id)
            const service_pl = await findSiteAgree('pl', +valuesID.id)
            const service_en = await findSiteAgree('en', +valuesID.id)
            
            setData([service_ua, service_ru, service_pl, service_en])
            setID(valuesID.id)

            setIsServiceExist(true)

        } catch(err: any){
            console.log(err)
            toast({
                variant: "destructive",
                title: 'Error!',
                description: `Service was not found by id:${valuesID.id}`
              })
        }
    }

    async function onSubmit(values: z.infer<typeof formSchema>){
        try{
            await editSiteAgree({
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
                },
                id: +ID
            })
            setTimeout(() => {
            toast({
                variant: 'default',
                title: 'Good job!',
                description: 'Service was changed!'
              })
              formID.reset()
              form.reset()
              
                reset()
              }, 0)


        } catch(err: any) {
            if(err == 'Unauthorized'){
                return router.push('/login')
            }
              toast({
              variant: "destructive",
              title: 'Error!',
              description: `Service was not removed by id:${ID}`
            })
            setTimeout(() => {
                reset()
              }, 3000)
            }
        }
        function reset(){
            setIsServiceExist(false)
            setData([])
            setID('')
          }



    return (
        <div className="p-4 flex flex-col gap-8" id='edit-service'>
            <Form {...formID}>
                <form onSubmit={formID.handleSubmit(onSearch)} className={`space-y-4 d-s:flex d-s:flex-col w-full mx-auto relative d-s:w-[33%]`} id='edit-site-agree'>
                        <FormField
                        control={formID.control}
                        name="id"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">What id has "Site agree"?</FormLabel>
                            <FormControl>
                                <Input className={`${isServiceExist &&  'bg-green-400'}`} disabled={isServiceExist} placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" disabled={isServiceExist}  className="w-full ">Search!</Button>
                        {data.length > 0 ? <Button type="button" onClick={() => {
                          form.reset()
                          formID.reset()
                          reset()
                        }} className="w-full">Refresh</Button> : <></>}
                </form>
            </Form>
            <Form {...form}>
                    {isServiceExist && <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-4 d-s:flex d-s:flex-col w-full mx-auto relative d-s:w-[33%]`}>
                    <FormField
                            control={form.control}
                            disabled={!isServiceExist}
                            name="textUA"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">New text UA</FormLabel>
                                <FormControl>
                                    <Input placeholder="text..."  {...field} />
                                </FormControl>
                                <FormDescription>previous: {data.length > 0 ? data[0].text : ''}</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            disabled={!isServiceExist}
                            control={form.control}
                            name="textRU"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">New text RU</FormLabel>
                                <FormControl>
                                    <Input placeholder="new text..."  {...field} />
                                </FormControl>
                                <FormDescription>previous: {data[1].text}</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            disabled={!isServiceExist}
                            control={form.control}
                            name="textEN"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">New text EN</FormLabel>
                                <FormControl>
                                    <Input placeholder="new text..."  {...field} />
                                </FormControl>
                                <FormDescription>previous: {data[3].text}</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            disabled={!isServiceExist}
                            control={form.control}
                            name="textPL"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">New Title PL</FormLabel>
                                <FormControl>
                                    <Input placeholder="new text..." {...field} />
                                </FormControl>
                                <FormDescription>previous: {data[2].title}</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            disabled={!isServiceExist}
                            control={form.control}
                            name="src"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">New URL</FormLabel>
                                <FormControl>
                                    <Input placeholder="new url..."  {...field} />
                                </FormControl>
                                <FormDescription>previous: {data[0].src}</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <div className="flex flex-row gap-2">
                            <Checkbox id="terms1" 
                            required
                            />
                            <div className="grid gap-1.5 leading-none">
                                <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                Accept all risks
                                </label>
                                <p className="text-sm text-muted-foreground">
                                    Are you sure to edit this "Site Agree"?
                                </p>
                            </div>
                        </div>
                        <Button type="submit"  className="w-full ">Submit!</Button>
                            
                    </form>}
            </Form>
        </div>
      )
    }

export default FormEditSiteAgree;