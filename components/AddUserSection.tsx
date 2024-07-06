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
import {getCompanies} from "@/db/queries";

export async function AddUserSection() {
    let companies = await getCompanies()

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Kullanıcı Ekle</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Kullanıcı Ekle</DialogTitle>
                </DialogHeader>
                    <AddUserForm
                        companies={companies}
                    />
                <DialogFooter>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
