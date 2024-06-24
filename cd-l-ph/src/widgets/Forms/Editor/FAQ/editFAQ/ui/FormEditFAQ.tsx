'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { MutateFunction, useMutation } from "@tanstack/react-query"

import {Subtitle} from "@/shared/ui/index"

import findFAQ from "../api/findFAQ"


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
import React from "react";
import editFAQ from "../api/editFAQ"

 
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
  
})

const formSchemaID = z.object({
    id: z.string().min(1, 'ID!'),     
})



const FormEditFAQ = () => {

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
        titleUA: "",
        titleRU: "",
        titleEN: "",
        titlePL: "",
        descriptionUA: "",
        descriptionRU: "",
        descriptionEN: "",
        descriptionPL: "",
      },
    })

    

    const [isFAQexist, setIsFAQexist] = React.useState(false)
    const [data, setData] = React.useState<any[]>([]);
    const [ID, setID] = React.useState('')


    async function onSearch(valuesID: z.infer<typeof formSchemaID>){
        try{
            const faq_ua = await findFAQ('ua', +valuesID.id)
            const faq_ru = await findFAQ('ru', +valuesID.id)
            const faq_pl = await findFAQ('pl', +valuesID.id)
            const faq_en = await findFAQ('en', +valuesID.id)

            setData([faq_ua, faq_ru, faq_pl, faq_en])
            setID(valuesID.id)

            console.log(data)
            setIsFAQexist(true)

        } catch(err: any){
            toast({
                variant: "destructive",
                title: 'Error!',
                description: `FAQ was not found by id:${valuesID.id}`
              })
        }
    }

    async function onSubmit(values: z.infer<typeof formSchema>){
        try{
            await editFAQ({
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
                id: +ID
            })
            toast({
                variant: 'default',
                title: 'Good job!',
                description: 'FAQ was changed!'
              })
              formID.reset()
              form.reset()
              setTimeout(() => {
                reset()
              }, 3000)


        } catch(err: any) {
              toast({
              variant: "destructive",
              title: 'Error!',
              description: `FAQ was not removed by id:${ID}`
            })
            setTimeout(() => {
                reset()
              }, 3000)
            }
        }
        function reset(){
            setIsFAQexist(false)
            setData([])
            setID('')
          }


    return (
        <div className="p-4 flex flex-col gap-8" id='edit-service'>
            <Form {...formID}>
                <form onSubmit={formID.handleSubmit(onSearch)} className={`space-y-4 d-s:flex d-s:flex-col w-full mx-auto relative d-s:w-[33%]`}>
                        <FormField
                        control={formID.control}
                        name="id"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">What id has "FAQ"?</FormLabel>
                            <FormControl>
                                <Input className={`${isFAQexist &&  'bg-green-400'}`} disabled={isFAQexist} placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" disabled={isFAQexist}  className="w-full ">Search!</Button>
                        {data.length > 0 ? <Button type="button" onClick={() => {
                          form.reset()
                          formID.reset()
                          reset()
                        }} className="w-full">Refresh</Button> : <></>}
                </form>
            </Form>
            <Form {...form}>
                    {isFAQexist && <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-4 d-s:flex d-s:flex-col w-full mx-auto relative d-s:w-[33%]`}>
                    <FormField
                            control={form.control}
                            disabled={!isFAQexist}
                            name="titleUA"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">New Title UA</FormLabel>
                                <FormControl>
                                    <Input placeholder="text..."  {...field} />
                                </FormControl>
                                <FormDescription>previous: {data.length > 0 ? data[0].title : ''}</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            disabled={!isFAQexist}
                            control={form.control}
                            name="titleRU"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">New Title RU</FormLabel>
                                <FormControl>
                                    <Input placeholder="new text..."  {...field} />
                                </FormControl>
                                <FormDescription>previous: {data[1].title}</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            disabled={!isFAQexist}
                            control={form.control}
                            name="titleEN"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">New Title EN</FormLabel>
                                <FormControl>
                                    <Input placeholder="new text..."  {...field} />
                                </FormControl>
                                <FormDescription>previous: {data[3].title}</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            disabled={!isFAQexist}
                            control={form.control}
                            name="titlePL"
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
                            disabled={!isFAQexist}
                            control={form.control}
                            name="descriptionUA"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">New description UA</FormLabel>
                                <FormControl>
                                    <Input placeholder="new text..."  {...field} />
                                </FormControl>
                                <FormDescription>previous: {data[0].description}</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            disabled={!isFAQexist}
                            control={form.control}
                            name="descriptionRU"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">New description RU</FormLabel>
                                <FormControl>
                                    <Input placeholder="text..."{...field} />
                                </FormControl>
                                <FormDescription>previous: {data[1].description}</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            disabled={!isFAQexist}
                            control={form.control}
                            name="descriptionEN"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">New description EN</FormLabel>
                                <FormControl>
                                    <Input placeholder="text..."  {...field} />
                                </FormControl>
                                <FormDescription>previous: {data[3].description}</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            disabled={!isFAQexist}
                            control={form.control}
                            name="descriptionPL"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">New description PL</FormLabel>
                                <FormControl>
                                    <Input placeholder="text..."  {...field} />
                                </FormControl>
                                <FormDescription>previous: {data[2].description}</FormDescription>
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
                                    Are you sure to edit this "FAQ", ID: {ID}?
                                </p>
                            </div>
                        </div>
                        <Button type="submit" variant={'destructive'}  className="w-full ">Submit!</Button>
                            
                    </form>}
            </Form>
        </div>
      )
    }

export default FormEditFAQ;