'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { MutateFunction, useMutation } from "@tanstack/react-query"

import {Subtitle} from "@/shared/ui/index"

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

import { Input } from "@/shared/uiShadcn/ui/input"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/shared/uiShadcn/ui/alert-dialog"

import { SuccessCard, LoadingCard, ErrorCard } from "@/features/index";

import { useToast } from "@/shared/uiShadcn/ui/use-toast"

import { Link, Title } from "@/shared/ui/index";
import React from "react";
import findFAQ from "../../editFAQ/api/findFAQ"
import deleteFAQ from "../api/deleteFAQ"

 
const formSchema = z.object({
    id: z.string().min(1, 'id!')
  })

const FormDeleteFAQ = () => {
    const {toast} = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        id: "",
      },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {

      try{
        if(isFAQexist){
          try{
            await deleteFAQ(+values.id)

            toast({
              variant: 'default',
              title: 'Good job!',
              description: 'FAQ was removed!'
            })
            form.reset()
            reset()
          } catch(err:any){
            toast({
              variant: "destructive",
              title: 'Error!',
              description: `FAQ was not removed by id:${values.id}`
            })
            reset()
          }
            
          }
        
        const faq_ua = await findFAQ('ua', +values.id)
        const faq_ru = await findFAQ('ru', +values.id)
        const faq_pl = await findFAQ('pl', +values.id)
        const faq_en = await findFAQ('en', +values.id)

        setData([faq_ua, faq_ru, faq_pl, faq_en])

        setIsFAQexist(true)


      } catch(err: any) {
        toast({
          variant: "destructive",
          title: 'Error!',
          description: `FAQ was not found by id:${values.id}`
        })
      }
    }

    const [isFAQexist, setIsFAQexist] = React.useState(false)
    const [data, setData] = React.useState<any[]>([]);

    function reset(){
      setIsFAQexist(false)
      setData([])
    }


    return (
        <div className="p-4 flex flex-col" id='delete-faq'>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-4 d-s:flex d-s:flex-col w-full mx-auto relative d-s:w-[33%]`}>
                        <FormField
                        control={form.control}
                        name="id"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">What id has "FAQ"?</FormLabel>
                            <FormControl>
                                <Input disabled={isFAQexist} placeholder="id..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        {
                            data.length > 0 ?
                            <div className="w-full h-fit bg-orange-400 p-4">
                              {
                                data.map((item:any) => {
                                  return (
                                    <div>title: {item.title}</div>
                                  )
                                })
                              }
                            </div>
                            : ''
                        }
                        <Button type="submit" className="w-full" variant={data.length > 0 ? 'destructive' : 'default'}>{data.length > 0 ? 'Delete' : 'Search'}</Button>
                        {data.length > 0 ? <Button type="button" onClick={() => {
                          form.reset()
                          reset()
                        }} className="w-full">Refresh</Button> : <></>}
                        {isFAQexist ? <div className="flex flex-row gap-2">
                            <Checkbox id="terms1" required/>
                            <div className="grid gap-1.5 leading-none">
                                <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                Accept all risks
                                </label>
                                <p className="text-sm text-muted-foreground">
                                    Are you sure to delete this "FAQ"?
                                </p>
                            </div>
                        </div> : ''}
                    </form>
            </Form>
        </div>
      )
    }

export default FormDeleteFAQ;