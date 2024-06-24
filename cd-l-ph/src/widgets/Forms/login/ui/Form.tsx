'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { MutateFunction, useMutation } from "@tanstack/react-query"

import {Subtitle} from "@/shared/ui/index"



import { useToast } from "@/shared/uiShadcn/ui/use-toast"

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
import Login from "../api/login"
import { useDispatch } from "react-redux"
import { useRouter } from "next/navigation"

 
const formSchema = z.object({
//   name: z.string().min(2, 'Too Short!').max(14, 'Too long!'),
  email: z.string().email('Invalid Email'),
  password: z.string().min(1, 'too short')
})

const LoginForm = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const [err, setErr] = React.useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const res = await Login(values.email, values.password)
        
        
        if(res.allow){
          router.push('/cabinet-admin')
        } else {
          setErr(true)
        }
    }


    return (
        <div className="p-4 flex flex-col" id='login-form'>
            <hr className=" bg-black h-[1px] border-0 t-s:m-10"></hr>
            <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className={` space-y-4 m-l:w-[80%] t-m:w-[50%] d-s:w-[33%] d-s:flex d-s:flex-col w-full mx-auto relative`}>
                    <Title text="Login" className="text-center text-white"></Title>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-white">Email</FormLabel>
                            <FormControl>
                                <Input placeholder="example@mail.com" className="bg-black text-white" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-white">Password</FormLabel>
                            <FormControl>
                                <Input placeholder="password" className="bg-black text-white" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <div className='flex flex-row text-white justify-between'>
                            <Subtitle text="Not have account yet?" className="text-white"></Subtitle>
                            <Link href='/registration' text='registration' isArrowIconNeeded={true} normalcase className="text-blue-500 d-s:p-0 lowercase gap-1 text-sm"></Link>
                        </div>
                        <div className={`w-full h-fit p-2 bg-red-500 text-white text-center ${err ? 'flex' : 'hidden'}`}>
                          Login Fail!
                        </div>
                        <Button type="submit" className="w-full " variant={"secondary"}>Submit</Button>
                    </form>
            </Form>
        </div>
      )
    }

export default LoginForm;