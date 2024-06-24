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
import editService from "../api/editMap"
import findService from "../api/getMapData"
import { useLocale } from "next-intl"
import findSocialMedia from "../api/getMapData"
import editSocialMedia from "../api/editMap"
import getMapData from "../api/getMapData"
import editMap from "../api/editMap"

 
const formSchema = z.object({
    adress: z.string().min(1, '!'),
    link: z.string().min(1, '!'),
    coordinationX: z.string().min(1, '!'),
    coordinationY: z.string().min(1, '!'),
})

const formSchemaID = z.object({
        id: z.string().min(1, 'ID!'),     
    })

const FormEditMap = () => {
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
            adress: '',
            link: '',
            coordinationX: '',
            coordinationY: '',
        }
    })
    const [data, setData] = React.useState<any[]>([]);


    async function onSearch(valuesID: z.infer<typeof formSchemaID>){
        try{
            const mapData = await getMapData()
            
            setData([mapData])

        } catch(err: any){
            toast({
                variant: "destructive",
                title: 'Error!',
                description: `Service was not found by id:${valuesID.id}`
              })
        }
    }

    async function onSubmit(values: z.infer<typeof formSchema>){
        try{
            await editMap({
                X: values.coordinationX,
                Y: values.coordinationY,
                adress: values.adress,
                link: values.link
            })
            setTimeout(() => {
            toast({
                variant: 'default',
                title: 'Good job!',
                description: 'Map was changed!'
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
              description: `Map was not changed`
            })
            setTimeout(() => {
                reset()
              }, 3000)
            }
        }
        function reset(){
            setData([])
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
                            <FormLabel className="">What id has "Service"?</FormLabel>
                            <FormControl>
                                <Input className={`${data.length > 0 &&  'bg-green-400'}`} disabled={data.length > 0} placeholder="text..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" disabled={data.length > 0}  className="w-full ">Search!</Button>
                        {data.length > 0 ? <Button type="button" onClick={() => {
                          form.reset()
                          formID.reset()
                          reset()
                        }} className="w-full">Refresh</Button> : <></>}
                </form>
            </Form>
            <Form {...form}>
                    {data.length > 0 && <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-4 d-s:flex d-s:flex-col w-full mx-auto relative d-s:w-[33%]`}>
                    <FormField
                            control={form.control}
                            name="adress"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">new adress text</FormLabel>
                                <FormControl>
                                    <Input placeholder="text..."  {...field} />
                                </FormControl>
                                <FormDescription>previous: {data.length > 0 ? data[0].adress : ''}</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="link"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">new link to google maps</FormLabel>
                                <FormControl>
                                    <Input placeholder="new text..."  {...field} />
                                </FormControl>
                                <FormDescription>previous: {data[0].link}</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                                                        <FormField
                            control={form.control}
                            name="coordinationX"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">new X</FormLabel>
                                <FormControl>
                                    <Input placeholder="new text..."  {...field} />
                                </FormControl>
                                <FormDescription>previous: {data[0].coordinationX}</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                                                        <FormField
                            control={form.control}
                            name="coordinationY"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="">new Y</FormLabel>
                                <FormControl>
                                    <Input placeholder="new text..."  {...field} />
                                </FormControl>
                                <FormDescription>previous: {data[0].coordinationY}</FormDescription>
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
                                    Are you sure to edit Map?
                                </p>
                            </div>
                        </div>
                        <Button type="submit"  className="w-full ">Submit!</Button>
                            
                    </form>}
            </Form>
        </div>
      )
    }

export default FormEditMap;