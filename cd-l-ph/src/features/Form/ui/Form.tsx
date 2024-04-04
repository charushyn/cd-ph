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
import { Input } from "@/shared/uiShadcn/ui/input"

import { sendData } from "../api";
 
const formSchema = z.object({
  name: z.string().min(2, 'Too Short!').max(14, 'Too long!'),
  phone: z.string().refine(validator.isMobilePhone, 'Invalid Phone Number'),
  email: z.string().email('Invalid Email')
})

const TestForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        phone: "",
        email: "",
      },
    })


    function onSubmit(values: z.infer<typeof formSchema>) {
      sendData(values)
    }



    return (
        <div className="p-4">

            <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-5">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Ваше імя</FormLabel>
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
                            <FormLabel>Ваш телефон</FormLabel>
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
                            <FormLabel>Ваша почта</FormLabel>
                            <FormControl>
                                <Input placeholder="example@gmail.com" {...field} />
                            </FormControl>
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