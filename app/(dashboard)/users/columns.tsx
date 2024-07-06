"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Eye} from "lucide-react"

export type File = {
    name: string
    isActive: string
    filesLength: number
    fileRemainingsLength: number
}

export const columns: ColumnDef<File>[] = [
    {
        accessorKey: "name",
        header: "Kullanıcı Adı",
    },
    {
        accessorKey: "isActive",
        header: "Aktif mi?",
    },
    {
        accessorKey: "filesLength",
        header: "Dosya Sayısı",
    },
    {
        accessorKey: "fileRemainingsLength",
        header: "5 Gün Kalan Dosya Sayısı",
    },
    {
        id: "İşlemler",
        cell: ({ row }) => {

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Menüyü Aç</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>İşlemler</DropdownMenuLabel>
                        <DropdownMenuItem className="flex gap-2 cursor-pointer">
                            <Eye
                            size={16}
                            />
                            Süresi Yaklaşanları Gör</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
