"use client";
 
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/shared/utils";
import { Button } from "@/shared/uiShadcn/ui/button";
import { Calendar } from "@/shared/uiShadcn/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/uiShadcn/ui/popover"
import { TimePicker } from "@/shared/uiShadcn/ui/time-picker";

import { Checkbox } from "@/shared/uiShadcn/ui/checkbox";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/shared/uiShadcn/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/shared/uiShadcn/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
 
import {toast} from "@/shared/uiShadcn/ui/use-toast"
import editWorkDay from "../api/editWorkDay";
 
const formSchema = z.object({
  from: z.date().optional(),
  to: z.date().optional(),
  isOpen: z.boolean().optional(),
  day: z.string()
});
 
type FormSchemaType = z.infer<typeof formSchema>;
 
export function FormEditWorkDay() {
  const router = useRouter()
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      day: '',
      isOpen: false,
    }
  });
 
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try{
      const response = await editWorkDay({
        whichDay: +values.day,
        isOpen: values.isOpen ? true : false,
        from: values.from,
        to: values.to
      })
      console.log(response)
      toast({
          variant: "default",
          title: "Good job!",
          description: "Service was added!"
      })

      // form.reset()

  } catch(err){
      if(err == 'Unauthorized'){
          return router.push('/login')
      }
      toast({
          variant: "destructive",
          title: "Try again!",
          description: "Service was not added!"
      })
  }
    console.log(values)
  }
 
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 justify-center"
        onSubmit={form.handleSubmit(onSubmit)}
      >
                    <FormField
                        control={form.control}
                        name="day"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Select a work day you want to edit!</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder={''}/>
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value={'0'}>Monday</SelectItem>
                                <SelectItem value={'1'}>Tuesday</SelectItem>
                                <SelectItem value={'2'}>Wednesday</SelectItem>
                                <SelectItem value={'3'}>Thursday</SelectItem>
                                <SelectItem value={'4'}>Friday</SelectItem>
                                <SelectItem value={'5'}>Saturday</SelectItem>
                                <SelectItem value={'6'}>Sunday</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        
                        control={form.control}
                        name="isOpen"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex items-center space-x-2">
                            <FormControl>
                            <Checkbox disabled={form.getValues('day').length == 0} checked={field.value} onCheckedChange={field.onChange} id="checkboxIsOpen"></Checkbox>
                            </FormControl>
                            <label
                              htmlFor="checkboxIsOpen"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Are you open in this day?
                            </label>
                          </div>
                          </FormItem>
                        )}
                      />
                        {form.getValues('isOpen') ?
                        <FormField
                        control={form.control}
                        name="from"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>From when you start working?</FormLabel>
                            <FormControl>
                            <div className="p-3 border-t border-border">
                              <TimePicker
                                format="h|m"
                                setDate={field.onChange}
                                date={field.value}
                                
                              />
                            </div>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      : ''}
                      {form.getValues('isOpen') ?
                        <FormField
                        control={form.control}
                        name="to"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>To when you will working?</FormLabel>
                            <FormControl>
                            <div className="p-3 border-t border-border">
                              <TimePicker
                                format="h|m"
                                setDate={field.onChange}
                                date={field.value}
                                
                              />
                            </div>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      : ''}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}