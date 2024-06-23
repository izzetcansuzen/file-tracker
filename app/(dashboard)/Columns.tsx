"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"

import {FolderX, Download, View} from "lucide-react";

export type UserFiles = {
    id: string
    name: string
    file: string
    end_date: string
    remaining_day: number
}

export const columns: ColumnDef<UserFiles>[] = [
    {
        accessorKey: "name",
        header: "Ad",
    },
    {
        accessorKey: "file",
        header: "Dosya",
    },
    {
        accessorKey: "end_date",
        header: "Bitiş Tarihi",
    },
    {
        accessorKey: "remaining_day",
        header: "Kalan Gün",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.id)}
                        >
                            <Download size={18} className='mr-1'/> Dosyayı İndir
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><View size={18} className='mr-1'/> Dosyayı İncele</DropdownMenuItem>
                        <DropdownMenuItem><FolderX size={18} className='mr-1'/> Dosyayı Sil</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
