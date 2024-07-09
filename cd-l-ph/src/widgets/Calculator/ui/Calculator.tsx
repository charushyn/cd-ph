'use client'

import { Title } from "@/shared/ui/index";
import React from "react";
import getImg from "@/shared/utils/img/getImg";
import TestService from "@/features/TestService/ui/TestService";


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

  import { Button } from "@/shared/uiShadcn/ui/button"
import { Input } from "@/shared/uiShadcn/ui/input"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import validator from 'validator';

  
  
  
  
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
    name: z.string().min(2, 'Too Short/Zakrótko/Закоротко!').max(14, 'Too Long/Zadługo/Задовго!'),
    surname: z.string().min(2, 'Too Short/Zakrótko/Закоротко!').max(14, 'Too Long/Zadługo/Задовго!'),
    mobilecode: z.string(),
    phone: z.string(),
    email: z.string().email('Invalid/Nieprawidłowy/Неправильний Email'),
    service: z.string().min(1, "Choose/Wybierz/Обери!"),
    textarea: z.string(),
  })

  


function Calculator ({title, bgPath} : {title: string, bgPath:string})  {


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

        return(
            <div>
                <Title text={title} className="text-sm bg-white h-[50px] flex items-center px-4 t-l:px-8 relative"></Title>
                <div style={{
                backgroundImage: `url(${getImg(bgPath)})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                }} className={`w-full min-h-[100svh] relative z-[0]`}
                ></div>
                {/* overlay with 0.5 bg black, make photo more dark*/}
                <div className="absolute z-[1] bg-black opacity-50 w-full h-full"></div>
                {/* Calculator Form */}
                <div className="flex flex-col d-s:flex-row overflow-x-hidden">  
                    
                </div>
            </div>
        )
}

export default Calculator;