import {cn} from "@/lib/utils";
import Image from "next/image";
import SidebarContent from "@/app/(dashboard)/SidebarContent";

type Props = {
    className?: string;
}

export default function Sidebar({className}: Props) {
    return (
        <div className={cn('h-screen fixed w-56 left-0 top-0 p-4 border-r-2 flex flex-col gap-4', className)}>
            <div className='flex gap-1 items-center justify-start text-purple-800 font-bold'>
                <Image
                    src='/logo.svg'
                    width={25}
                    height={25}
                    alt='logo'
                />
                <span>File Tracker</span>
            </div>
            <SidebarContent />
        </div>
    )
}