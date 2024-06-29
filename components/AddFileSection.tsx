"use client"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"
import AddFileForm from "./AddFileForm";

interface Props{
    userNameAndIds: Array<Object>
    allFileTypes: Array<Object>
}

export default function AddFileSection({userNameAndIds, allFileTypes} : Props){
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Dosya Ekle</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <AddFileForm
                        userNameAndIds={userNameAndIds}
                        allFileTypes={allFileTypes}
                    />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}