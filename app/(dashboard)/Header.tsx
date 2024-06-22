import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Sidebar from "@/app/(dashboard)/Sidebar"
import {Menu} from "lucide-react"

export default function Header(){
    /*TODO: profile image alanı eklenmeli (burası clerk'mü olacak?)*/
    /*TODO: search alanı eklenmeli*/
    return (
        <nav className='lg:ml-56 h-14 flex items-center justify-between px-4 border-b-2'>
            <div className='flex lg:hidden'>
                <Sheet>
                    <SheetTrigger><Menu /></SheetTrigger>
                    <SheetContent side='left' className='p-0'>
                        <Sidebar className='w-full relative'/>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}