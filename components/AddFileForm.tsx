"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { z } from "zod"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {cn} from "@/lib/utils";
import {addFile} from "@/db/queries";
import {useToast} from "@/components/ui/use-toast";

const formSchema = z.object({
    userId: z.string(),
    name: z.string().min(2).max(50),
    /*file: z.any().refine(val => val.length > 0, "File is required"),*/
    startDate: z.date({
        required_error: "A date of birth is required.",
    }),
    endDate: z.date({
        required_error: "A date of birth is required.",
    }),
    typeId: z.string(),
})

interface Props{
    userNameAndIds: Array<Object>
    allFileTypes: Array<Object>
}

export default function AddFileForm({userNameAndIds, allFileTypes} : Props){
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            userId: 0,
            name: "",
            startDate: "2020-01-01",
            endDate: "2020-01-01",
            typeId: 0,
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(new Date(values.startDate) == new Date(values.endDate))
            if(new Date(values.startDate) < new Date(values.endDate)){
                await addFile(values)
                toast({
                    title: 'Başarılı',
                    description: `Veri başarılı bir şekilde eklendi!`,
                    variant: 'default',
                });
            }if(new Date(values.startDate) > new Date(values.endDate)){
                toast({
                    title: 'Başarısız',
                    description: `Başlangıç Tarihi Bitişten Küçük Olamaz! `,
                    variant: 'destructive',
                });
            }if (new Date(values.startDate).getTime() === new Date(values.endDate).getTime()) {
                toast({
                    title: 'Başarısız',
                    description: `Tarihler Eşit Olamaz`,
                    variant: 'destructive',
                });
            }
        } catch (err){
            toast({
                title: 'Bir Hata Oluştu',
                description: `Veri başarılı bir şekilde eklenemedi! ${err}`,
                variant: 'default',
            });
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                <FormField
                    control={form.control}
                    name="userId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Kullanıcı Adı</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Dosyanın kime ait olacağını seçin" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {userNameAndIds.map((item) => {
                                        return (
                                            <SelectItem value={"" + item?.id}>{item?.name}</SelectItem>
                                        )
                                    })}
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
                            <FormLabel>Dosya Adı</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="typeId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Dosya Türü</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Dosyanın Türünü Seçin" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {allFileTypes.map((item) => {
                                        return (
                                            <SelectItem value={"" + item?.id}>{item?.name}</SelectItem>
                                        )
                                    })}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                        <FormItem className="flex flex-col w-full">
                            <FormLabel>Dosya Başlangıç Tarihi</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "dd-MM-yyyy")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Dosya Bitiş Tarihi</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "dd-MM-yyyy")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        format="YYYY-MM-DD"
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}