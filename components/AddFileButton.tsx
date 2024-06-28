"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"
import AddFileForm from "./AddFileForm";


export default function AddFileButton(){
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Dosya Ekle</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <AddFileForm />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}