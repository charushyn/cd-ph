'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { MutateFunction, useMutation } from "@tanstack/react-query"

import {Subtitle} from "@/shared/ui/index"

import findOpinion from "../api/findOpinion"


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
import editOpinion from "../api/editOpinion"

 
const formSchema = z.object({
    name: z.string().min(1, '!'),
    descriptionUA: z.string().min(1, '!'),
    descriptionRU: z.string().min(1, '!'),
    descriptionEN: z.string().min(1, '!'),
    descriptionPL: z.string().min(1, '!'),
    positionUA: z.string().min(1, '!'),
    positionRU: z.string().min(1, '!'),
    positionEN: z.string().min(1, '!'),
    positionPL: z.string().min(1, '!'),
    img: z.instanceof(File).optional()
  
})

const formSchemaID = z.object({
    id: z.string().min(1, 'ID!'),     
})



const FormEditOpinion = () => {

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
        descriptionUA: "",
        descriptionRU: "",
        descriptionEN: "",
        descriptionPL: "",
        positionUA: "",
        positionRU: "",
        positionEN: "",
        positionPL: "",
        img: undefined
      },
    })

    

    const [isOpinionExist, setIsOpinionExist] = React.useState(false)
    const [data, setData] = React.useState<any[]>([]);
    const [ID, setID] = React.useState('')


    async function onSearch(valuesID: z.infer<typeof formSchemaID>){
        try{
            const opinion_ua = await findOpinion('ua', +valuesID.id)
            const opinion_ru = await findOpinion('ru', +valuesID.id)
            const opinion_pl = await findOpinion('pl', +valuesID.id)
            const opinion_en = await findOpinion('en', +valuesID.id)

            setData([opinion_ua, opinion_ru, opinion_pl, opinion_en])
            setID(valuesID.id)

            console.log(data)
            setIsOpinionExist(true)

        } catch(err: any){
            toast({
                variant: "destructive",
                title: 'Error!',
                description: `Opinion was not found by id:${valuesID.id}`
              })
        }
    }

    async function onSubmit(values: z.infer<typeof formSchema>){
        try{
            await editOpinion({
                ua: {
                    description: values.descriptionUA,
                    name: values.name,
                    position: values.positionUA
                },
                ru: {
                    description: values.descriptionRU,
                    name: values.name,
                    position: values.positionRU
                },
                pl: {
                    description: values.descriptionPL,
                    name: values.name,
                    position: values.positionPL
                },
                en: {
                    description: values.descriptionEN,
                    name: values.name,
                    position: values.positionEN
                },
                id: +ID,
                img: values.img
            })
            toast({
                variant: 'default',
                title: 'Good job!',
                description: 'Opinion was changed!'
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
              description: `Opinion was not removed by id:${ID}`
            })
            setTimeout(() => {
                reset()
              }, 3000)
            }
        }
        function reset(){
            setIsOpinionExist(false)
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
                            <FormLabel className="">What id has "Opinion"?</FormLabel>
                            <FormControl>
                                <Input className={`${isOpinionExist &&  'bg-green-400'}`} disabled={isOpinionExist} placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" disabled={isOpinionExist}  className="w-full ">Search!</Button>
                        {data.length > 0 ? <Button type="button" onClick={() => {
                          form.reset()
                          formID.reset()
                          reset()
                        }} className="w-full">Refresh</Button> : <></>}
                </form>
            </Form>
            <Form {...form}>
                    {isOpinionExist && <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-4 d-s:flex d-s:flex-col w-full mx-auto relative d-s:w-[33%]`}>
                            <FormField
                            disabled={!isOpinionExist}
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">New name</FormLabel>
                                <FormControl>
                                    <Input placeholder="new text..."  {...field} />
                                </FormControl>
                                <FormDescription>previous: {data[0].name}</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            disabled={!isOpinionExist}
                            control={form.control}
                            name="positionUA"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">New position UA</FormLabel>
                                <FormControl>
                                    <Input placeholder="new text..."  {...field} />
                                </FormControl>
                                <FormDescription>previous: {data[0].position}</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                                                        <FormField
                            disabled={!isOpinionExist}
                            control={form.control}
                            name="positionRU"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">New position RU</FormLabel>
                                <FormControl>
                                    <Input placeholder="new text..."  {...field} />
                                </FormControl>
                                <FormDescription>previous: {data[1].position}</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                                                        <FormField
                            disabled={!isOpinionExist}
                            control={form.control}
                            name="positionPL"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">New position PL</FormLabel>
                                <FormControl>
                                    <Input placeholder="new text..."  {...field} />
                                </FormControl>
                                <FormDescription>previous: {data[2].position}</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            disabled={!isOpinionExist}
                            control={form.control}
                            name="positionEN"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">New position EN</FormLabel>
                                <FormControl>
                                    <Input placeholder="new text..."  {...field} />
                                </FormControl>
                                <FormDescription>previous: {data[3].position}</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            disabled={!isOpinionExist}
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
                            disabled={!isOpinionExist}
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
                            disabled={!isOpinionExist}
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
                            disabled={!isOpinionExist}
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
                        name="img"
                        render={({ field: { value, onChange, ...fieldProps } }) => (
                            <FormItem>
                            <FormLabel>IMG</FormLabel>
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
                                    Are you sure to edit this "Opinion", ID: {ID}?
                                </p>
                            </div>
                        </div>
                        <Button type="submit" variant={'destructive'}  className="w-full ">Submit!</Button>
                            
                    </form>}
            </Form>
        </div>
      )
    }

export default FormEditOpinion;