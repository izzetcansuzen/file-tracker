import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {AddUserForm} from "@/components/AddUserForm";

export function AddUserSection() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Kullanıcı Ekle</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Kullanıcı Ekle</DialogTitle>
                </DialogHeader>
                    <AddUserForm />
                <DialogFooter>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
