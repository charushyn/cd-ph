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
import editService from "../api/editWhyWe"
import findService from "../api/findWhyWe"
import { useLocale } from "next-intl"
import findWhyWes from "../api/findWhyWe"
import editWhyWe from "../api/editWhyWe"


 
const formSchema = z.object({
    newtitleUA: z.string().min(1, '!'),
    newtitleRU: z.string().min(1, '!'),
    newtitleEN: z.string().min(1, '!'),
    newtitlePL: z.string().min(1, '!'),
    descriptionUA: z.string().min(1, '!'),
    descriptionRU: z.string().min(1, '!'),
    descriptionEN: z.string().min(1, '!'),
    descriptionPL: z.string().min(1, '!'),
    svg: z.instanceof(File).optional()
  
})

const formSchemaID = z.object({
        id: z.string().min(1, 'ID!'),     
    })

const FormEditWhyWe = () => {
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
            newtitleUA: "",
            newtitlePL: "",
            newtitleRU: "",
            newtitleEN: "",
            descriptionUA: "",
            descriptionRU: "",
            descriptionEN: "",
            descriptionPL: "",
            svg: undefined
        }
    })
    const [isWHyWeExist, setIsWhyWeExist] = React.useState(false)
    const [data, setData] = React.useState<any[]>([]);
    const [ID, setID] = React.useState('')


    async function onSearch(valuesID: z.infer<typeof formSchemaID>){
        try{
            const whywe_ua = await findWhyWes('ua', +valuesID.id)
            const whywe_ru = await findWhyWes('ru', +valuesID.id)
            const whywe_pl = await findWhyWes('pl', +valuesID.id)
            const whywe_en = await findWhyWes('en', +valuesID.id)
            
            setData([whywe_ua, whywe_ru, whywe_pl, whywe_en])
            setID(valuesID.id)

            setIsWhyWeExist(true)

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
            await editWhyWe({
                ua: {
                    title: values.newtitleUA,
                    description: values.descriptionUA
                },
                ru: {
                    title: values.newtitleRU,
                    description: values.descriptionRU
                },
                pl: {
                    title: values.newtitlePL,
                    description: values.descriptionPL
                },
                en: {
                    title: values.newtitleEN,
                    description: values.descriptionEN
                },
                id: +ID,
                svg: values.svg
            })
            setTimeout(() => {
            toast({
                variant: 'default',
                title: 'Good job!',
                description: 'WhyWe was changed!'
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
              description: `WhyWe was not removed by id:${ID}`
            })
            setTimeout(() => {
                reset()
              }, 3000)
            }
        }
        function reset(){
            setIsWhyWeExist(false)
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
                            <FormLabel className="">What id has "Whywe"?</FormLabel>
                            <FormControl>
                                <Input className={`${isWHyWeExist &&  'bg-green-400'}`} disabled={isWHyWeExist} placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" disabled={isWHyWeExist}  className="w-full ">Search!</Button>
                        {data.length > 0 ? <Button type="button" onClick={() => {
                          form.reset()
                          formID.reset()
                          reset()
                        }} className="w-full">Refresh</Button> : <></>}
                </form>
            </Form>
            <Form {...form}>
                    {isWHyWeExist && <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-4 d-s:flex d-s:flex-col w-full mx-auto relative d-s:w-[33%]`}>
                    <FormField
                            control={form.control}
                            disabled={!isWHyWeExist}
                            name="newtitleUA"
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
                            disabled={!isWHyWeExist}
                            control={form.control}
                            name="newtitleRU"
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
                            disabled={!isWHyWeExist}
                            control={form.control}
                            name="newtitleEN"
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
                            disabled={!isWHyWeExist}
                            control={form.control}
                            name="newtitlePL"
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
                            disabled={!isWHyWeExist}
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
                            disabled={!isWHyWeExist}
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
                            disabled={!isWHyWeExist}
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
                            disabled={!isWHyWeExist}
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
                            <FormDescription>! Do not upload NEW SVG if you want to save current!</FormDescription>
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
                                    Are you sure to edit this "Whywe"?
                                </p>
                            </div>
                        </div>
                        <Button type="submit"  className="w-full ">Submit!</Button>
                            
                    </form>}
            </Form>
        </div>
      )
    }

export default FormEditWhyWe;