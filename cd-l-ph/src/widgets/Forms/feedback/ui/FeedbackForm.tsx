'use client'

import React from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import validator from 'validator';

import { MutateFunction, useMutation } from "@tanstack/react-query"


import { Button } from "@/shared/uiShadcn/ui/button"
import { Input } from "@/shared/uiShadcn/ui/input"

import { SuccessCard, LoadingCard, ErrorCard } from "@/features/index";
import { Title } from "@/shared/ui/index";

import { sendData } from "../api";

import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/shared/uiShadcn/ui/select"

import {
  Textarea,
} from "@/shared/uiShadcn/ui/textarea"


import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/uiShadcn/ui/form"
 
const formSchema = z.object({
  name: z.string().min(2, 'Too Short!').max(14, 'Too long!'),
  surname: z.string().min(2, 'Too Short!').max(14, 'Too long!'),
  mobilecode: z.string(),
  phone: z.string(),
  email: z.string().email('Invalid Email'),
  service: z.string().min(1, "Оберіть послугу яка Вас цікавить"),
  textarea: z.string()
}).refine((values) => {
  console.log(values)
  return validator.isMobilePhone(`${values.mobilecode}${values.phone}`, ['uk-UA', 'pl-PL', 'be-BY', 'de-DE'])
},
  {
      message: "Неправильний номер, заповніть ще раз та вишліть форму",
      path: ["phone"]
  }
)
const FeedbackForm = () => {
    const { 
      isPending, 
      isError, 
      isSuccess, 
      error, 
      mutate, 
      reset
    } = useMutation(
      {
        mutationFn: (values: {name: string, surname: string, email: string, phone: string, service: string, textarea: string}) => sendData(values),
      })

     

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        surname: "",
        mobilecode: "+48",
        phone: "",
        email: "",
        service: "",
        textarea: "",
      },
    })
    

    React.useEffect(() => {
      isSuccess && toast.success('Успішно!')
      isError && toast.error('Помилка!')!
    }, [isError, isSuccess])

    function onSubmit(values: z.infer<typeof formSchema>) {
      mutate(values)
    }

    function resetValues(){
      reset()
      form.reset()
    }


    return (
        <div className="p-4 flex flex-col gap-4" id='feedbackform'>
            <hr className=" bg-black h-[1px] border-0 t-s:m-10"></hr>
            <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-5 m-l:w-[80%] t-m:w-[50%] d-s:w-[33%] d-s:flex d-s:flex-col mx-auto relative`}>
                      {isPending && <LoadingCard text='Loading...'></LoadingCard>}
                      {isError && <ErrorCard funcReset={resetValues} text={error.message}></ErrorCard>}
                      {isSuccess && <SuccessCard funcReset={resetValues} text="Успішно!"></SuccessCard>}
                      
                    <Title text="Залишились питання або ж бажаєте залишити заявку?" className=" t-s:text-2xl text-sm t-s:mb-10 t-s:w-[400px] t-s:flex t-s:self-center text-center"></Title>
                    <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Interested service *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a service you need." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="leasing">leasing</SelectItem>
                                <SelectItem value="wspowpraca">wspowpraca</SelectItem>
                                <SelectItem value="hipoteka">hipoteka</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Ваше імя *</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                Наприклад: Сергій
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="surname"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Ваше призвіще</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <div className=" flex flex-row">
                        <FormField
                        control={form.control}
                        name="mobilecode"
                        render={({ field }) => (
                          <FormItem>
                            
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                              <SelectTrigger>
                                  <SelectValue placeholder="Select a service you need." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className=" w-fit">
                                <SelectItem value="+48">+48</SelectItem>
                                <SelectItem value="+380">+380</SelectItem>
                                <SelectItem value="+49">+49</SelectItem>
                                <SelectItem value="+375">+375</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                        <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem className="w-full">
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        </div>
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Ваша почта *</FormLabel>
                            <FormControl>
                                <Input placeholder="example@gmail.com" {...field}/>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                         <FormField
                          control={form.control}
                          name="textarea"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell more details about your request!"
                                  className="resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                Це поле не є вимаганим, але можете допомогти нам зрозуміти Вашу потребу!
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button type="submit" className="w-full">Надіслати</Button>
                    </form>
            </Form>
        </div>
      )
    }

export default FeedbackForm;