import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Sidebar from "@/app/(dashboard)/Sidebar"
import {Menu} from "lucide-react"
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

export default function Header(){
    /*TODO: search alanı eklenmeli*/
    return (
        <nav className='lg:ml-56 h-14 flex items-center justify-between px-4 border-b-2'>
            <div className='hidden lg:flex'></div>
            <div className='flex lg:hidden'>
                <Sheet>
                    <SheetTrigger><Menu /></SheetTrigger>
                    <SheetContent side='left' className='p-0'>
                        <Sidebar className='w-full relative'/>
                    </SheetContent>
                </Sheet>
            </div>
           <div className='self-center'>
               <SignedOut>
                   <SignInButton />
               </SignedOut>
               <SignedIn>
                   <UserButton />
               </SignedIn>
           </div>
        </nav>
    )
}