"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {addUser} from "@/db/queries";
import {toast, useToast} from "@/components/ui/use-toast";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Kullanıcı adı en az 2 karakterden oluşmalıdır.",
    }),
    companyId: z.string(),
    isActive: z.boolean()
})

interface AddUserFormProps {
    companies: [
        id: number,
        name: string
    ]
}

export function AddUserForm({companies}: AddUserFormProps) {
    const {toast} = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            companyId: "",
            isActive: true,
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try{
            await addUser(values)
            toast({
                title: "Kullanıcı Eklendi!",
            })
            console.log("eklendi")
        }catch(err){
            console.log(err)
            toast({
                title: "Kullanıcı Eklenemedi",
            })
        }
        console.log(values)
    }

    // @ts-ignore
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Kullanıcı Adı</FormLabel>
                            <FormControl>
                                <Input placeholder="kullanıcı adı..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="companyId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Şirket</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Bir şirket seçin" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {companies.map((item: {id: number, name: string}) => {
                                        return (
                                            <SelectItem value={"" + item.id}>{item.name}</SelectItem>
                                        )
                                    })}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Gönder</Button>
            </form>
        </Form>
    )
}
