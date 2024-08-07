'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { MutateFunction, useMutation } from "@tanstack/react-query"

import {Subtitle} from "@/shared/ui/index"

import { useRouter } from "next/navigation"





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

import { Checkbox } from "@/shared/uiShadcn/ui/checkbox"

import { useToast } from "@/shared/uiShadcn/ui/use-toast"

import deleteService from "../api/deleteSiteAgree"

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

import { Link, Title } from "@/shared/ui/index";
import React from "react";
import findService from "../../editSiteAgree/api/findSiteAgree"
import deleteSiteAgree from "../api/deleteSiteAgree"
import findSiteAgree from "../../editSiteAgree/api/findSiteAgree"

 
const formSchema = z.object({
  id: z.string().min(1, 'id!')
})

const FormDeleteSiteAgree = () => {
  const router = useRouter()
    const {toast} = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        id: "",
      },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {

      try{
        if(isServiceExist){
          try{
            await deleteSiteAgree(+values.id)

            toast({
              variant: 'default',
              title: 'Good job!',
              description: 'Service was removed!'
            })
            reset()
          } catch(err:any){
            if(err == 'Unauthorized'){
              return router.push('/login')
            }
            toast({
              variant: "destructive",
              title: 'Error!',
              description: `Service was not removed by id:${values.id}`
            })
            reset()
          }
            
          }
        
        const service_ua = await findSiteAgree('ua', +values.id)
        const service_ru = await findSiteAgree('ru', +values.id)
        const service_pl = await findSiteAgree('pl', +values.id)
        const service_en = await findSiteAgree('en', +values.id)

        setData([service_ua, service_ru, service_pl, service_en])

        setIsServiceExist(true)


      } catch(err: any) {
        toast({
          variant: "destructive",
          title: 'Error!',
          description: `Service was not found by id:${values.id}`
        })
      }
    }

    const [isServiceExist, setIsServiceExist] = React.useState(false)
    const [data, setData] = React.useState<any[]>([]);

    function reset(){
      setIsServiceExist(false)
      setData([])
    }


    return (
        <div className="p-4 flex flex-col" id='delete-service'>
            <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-4 d-s:flex d-s:flex-col w-full mx-auto relative d-s:w-[33%]`} id='delete-site-agree'>
                        <FormField
                        control={form.control}
                        name="id"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="">What id has "Site Agree"?</FormLabel>
                            <FormControl>
                                <Input disabled={isServiceExist} placeholder="id..."  {...field} />
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
                                    <div>title: {item.text}</div>
                                  )
                                })
                              }
                            </div>
                            : ''
                        }
                        <Button type="submit" className="w-full">{data.length > 0 ? 'Delete' : 'Search'}</Button>
                        {data.length > 0 ? <Button type="button" onClick={() => {
                          form.reset()
                          reset()
                        }} className="w-full">Refresh</Button> : <></>}
                        {isServiceExist ? <div className="flex flex-row gap-2">
                            <Checkbox id="terms1" required/>
                            <div className="grid gap-1.5 leading-none">
                                <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                Accept all risks
                                </label>
                                <p className="text-sm text-muted-foreground">
                                    Are you sure to delete this "Site Agree"?
                                </p>
                            </div>
                        </div> : ''}
                    </form>
            </Form>
        </div>
      )
    }

export default FormDeleteSiteAgree;