'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"




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

import { sendData } from "../api";
import { Title } from "@/shared/ui/index";
 
const formSchema = z.object({
  name: z.string().min(2, 'Too Short!').max(14, 'Too long!'),
  phone: z.string().refine(validator.isMobilePhone, 'Invalid Phone Number'),
  email: z.string().email('Invalid Email'),
  service: z.string().min(1, "Оберіть послугу яка Вас цікавить"),
  textarea: z.string()
})

const TestForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        phone: "",
        email: "",
        service: "",
        textarea: "",
      },
    })


    function onSubmit(values: z.infer<typeof formSchema>) {
      // sendData(values)
      console.log(values)
    }



    return (
        <div className="p-4 flex flex-col gap-4" id='main-form'>
            <hr className=" bg-black h-[1px] border-0 t-s:m-10"></hr>
            <Title text="Залишились питання або ж бажаєте залишити заявку?" className=" t-s:text-2xl t-s:mb-10 t-s:w-[400px] t-s:flex t-s:self-center text-center"></Title>
            <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-5">
                    <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Interested service *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Ваш телефон *</FormLabel>
                            <FormControl>
                                <Input placeholder="+48 / +38 / +49" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                                                <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Ваша почта *</FormLabel>
                            <FormControl>
                                <Input placeholder="example@gmail.com" {...field} />
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

export default TestForm;