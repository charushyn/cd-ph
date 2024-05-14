'use client'

import React from "react";

import { Link } from "@/shared/ui/index";


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import validator from 'validator';

import {useLocale} from "next-intl";

import { MutateFunction, useMutation } from "@tanstack/react-query"


import { Button } from "@/shared/uiShadcn/ui/button"
import { Input } from "@/shared/uiShadcn/ui/input"

import { SuccessCard, LoadingCard, ErrorCard } from "@/features/index";
import { Title } from "@/shared/ui/index";

import { sendData } from "../api";

import ReCAPTCHA from "react-google-recaptcha";

import { useTranslations } from "next-intl";

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

import { Checkbox } from "@/shared/uiShadcn/ui/checkbox"



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
  name: z.string().min(2, 'name!').max(14, 'Too long!'),
  surname: z.string().min(2, 'Too Short!').max(14, 'Too long!'),
  mobilecode: z.string(),
  phone: z.string(),
  email: z.string().email('Invalid Email'),
  service: z.string().min(1, "Оберіть послугу яка Вас цікавить"),
  textarea: z.string(),
}).refine((values) => {
  return validator.isMobilePhone(`${values.mobilecode}${values.phone}`, ['uk-UA', 'pl-PL', 'be-BY', 'de-DE'])
},
  {
      message: "Неправильний номер, заповніть ще раз та вишліть форму",
      path: ["phone"]
  }
)
const FeedbackForm = () => {
  const t = useTranslations("feedback")
    const [captcha, setCaptcha] = React.useState(false)
    const { 
      isPending, 
      isError, 
      isSuccess, 
      error, 
      mutate, 
      reset
    } = useMutation(
      {
        mutationFn: (values: {name: string, surname: string, email: string, mobilecode: string, phone: string, service: string, textarea: string}) => sendData(values),
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
    

    // React.useEffect(() => {
    //   isSuccess && toast.success('Успішно!')
    //   isError && toast.error('Помилка!')!
    // }, [isError, isSuccess])

    const onSubmit = async (values: z.infer<typeof formSchema>) =>  {
      if(!captcha){
        // toast.warning("Captcha!")
        return
      }
      mutate(values)
    }

    function resetValues(){
      reset()
      form.reset()
    }

    const locale = useLocale()
    return (
        <div className="flex flex-col" id='feedbackform'>
            <Title text={''} className="text-sm bg-white h-[50px] flex items-center px-4 t-l:px-8 relative"></Title>
            <div className="flex flex-col gap-4 font-OpenSans d-s:flex-row h-fit d-s:justify-between">
              <div className="h-vh w-[67%] photo relative">
                <div className="overlay"></div>
              </div>
              <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-5 p-4 w-full m-l:w-[80%] t-m:w-[50%] d-s:w-[33%] d-s:flex d-s:flex-col mx-auto d-s:mx-0 relative`}>
                      <LoadingCard isOpen={isPending}></LoadingCard>
                      <ErrorCard isOpen={isError} funcReset={resetValues} text={error?.message}></ErrorCard>
                      <SuccessCard isOpen={isSuccess} funcReset={resetValues}></SuccessCard>
                    <Title text={t("title")} className=" t-s:text-xl d-s:text-lg text-sm t-s:mb-10 t-s:w-[400px] t-s:flex t-s:self-center text-center"></Title>
                    <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('form.select.label')}</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder={''}/>
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value={t('form.select.0')}>{t('form.select.0')}</SelectItem>
                                <SelectItem value={t('form.select.1')}>{t('form.select.1')}</SelectItem>
                                <SelectItem value={t('form.select.2')}>{t('form.select.2')}</SelectItem>
                                <SelectItem value={t('form.select.3')}>{t('form.select.3')}</SelectItem>
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
                            <FormLabel>{t('form.name.label')}</FormLabel>
                            <FormControl>
                                <Input placeholder={t('form.name.placeholder')} {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="surname"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>{t('form.surname.label')}</FormLabel>
                            <FormControl>
                                <Input placeholder={t('form.surname.placeholder')} {...field} />
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
                            <FormLabel className="w-full">{t('form.code.label')}</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                              <SelectTrigger>
                                  <SelectValue placeholder='' />
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
                            <FormLabel>{t('form.phone.label')}</FormLabel>
                            <FormControl>
                                <Input placeholder={t('form.phone.placeholder')} {...field} />
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
                            <FormLabel>{t('form.mail.label')}</FormLabel>
                            <FormControl>
                                <Input placeholder={t('form.mail.placeholder')} {...field}/>
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
                              <FormLabel>{t('form.textarea.label')}</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder={t('form.textarea.placeholder')}
                                  className="resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                               {t('form.textarea.description')}
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        {/* <div className="items-top flex space-x-2">
                          <Checkbox id="terms1" required/>
                          <div className="grid gap-1.5 leading-none">
                            <label
                              htmlFor="terms1"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Accept terms and conditions
                            </label>
                          </div>
                        </div> */}
                        <ReCAPTCHA
                        aria-required={true}
                        onChange={() => {
                          setCaptcha(true)
                        }}
                        hl={locale != 'ua' ? locale : 'ru'}
                        sitekey='6LecEcspAAAAAGtyTc0IYkH_LGTWjVbBZOICQgCQ'
                        className=""
                        />
                        <Button type="submit" className="w-full">Надіслати</Button>
                    </form>
            </Form>
            <style jsx>{
                        `
                        .photo {
                            background-image: url("https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.850businessmagazine.com/content/uploads/2019/10/iStock-694415714-1024x688.jpg");
                            background-size: cover;
                            background-repeat: no-repeat;
                            background-position: right;
                        }
                        .overlay {    
                          width: 100%;
                          height: 100%;
                          background-size: cover;
                          position: absolute;
                          top: 0px;
                          right: 0px;
                          bottom: 0px;
                          left: 0px;
                          
                          background-color: rgba(0,0,0,0.60);
                      }
                        `
                    }</style>
            </div>
        </div>
      )
    }

export default FeedbackForm;