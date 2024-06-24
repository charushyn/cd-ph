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
import findOpinion from "../../editOpinion/api/findOpinion"
import deleteOpinion from "../api/deleteOpinion"

 
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
        if(isOpinionExist){
          try{
            await deleteOpinion(+values.id)

            toast({
              variant: 'default',
              title: 'Good job!',
              description: 'Opinion was removed!'
            })
            reset()
          } catch(err:any){
            toast({
              variant: "destructive",
              title: 'Error!',
              description: `Opinion was not removed by id:${values.id}`
            })
            reset()
          }
            
          }
        
        const opinion_ua = await findOpinion('ua', +values.id)
        const opinion_ru = await findOpinion('ru', +values.id)
        const opinion_pl = await findOpinion('pl', +values.id)
        const opinion_en = await findOpinion('en', +values.id)

        setData([opinion_ua, opinion_ru, opinion_pl, opinion_en])

        setIsOpinionExist(true)


      } catch(err: any) {
        toast({
          variant: "destructive",
          title: 'Error!',
          description: `Opinion was not found by id:${values.id}`
        })
      }
    }

    const [isOpinionExist, setIsOpinionExist] = React.useState(false)
    const [data, setData] = React.useState<any[]>([]);

    function reset(){
      setIsOpinionExist(false)
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
                            <FormLabel className="">What id has "Opinion"?</FormLabel>
                            <FormControl>
                                <Input disabled={isOpinionExist} placeholder="id..."  {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        {
                            data.length > 0 ?
                            <div className="w-full h-fit bg-orange-400 p-4">
                              <p>Opinion from: {data[0].name}</p>
                              {
                                data.map((item:any) => {
                                  return (
                                    <div className="flex flex-col">
                                      <p>Description: {item.description}</p>
                                    </div>
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
                        {isOpinionExist ? <div className="flex flex-row gap-2">
                            <Checkbox id="terms1" required/>
                            <div className="grid gap-1.5 leading-none">
                                <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                Accept all risks
                                </label>
                                <p className="text-sm text-muted-foreground">
                                    Are you sure to delete this "Opinion" with ID {data[0].id}?
                                </p>
                            </div>
                        </div> : ''}
                    </form>
            </Form>
        </div>
      )
    }

export default FormDeleteFAQ;