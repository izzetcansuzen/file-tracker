import {Button} from "@/components/ui/button";
import {File} from "lucide-react";
import Link from "next/link";

/*TODO: Sidebar bilgileri eklenmeli*/
const sideBarItems = {

}

export default function SidebarContent(){
    /*TODO: Linkleri componentleştir*/
    /*TODO: Linkleri dinamikleştir*/
    /*TODO: Iconları nasıl dinamikleştirebiliriz?*/
    return (
        <div className='grid gap-2'>
            <Link href='/'>
                <Button variant='sideBar'>
                    <File /> <p className='overflow-hidden text-ellipsis whitespace-nowrap'>Item</p>
                </Button>
            </Link>
        </div>
    )
}