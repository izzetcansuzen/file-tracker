import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface SidebarItemsProps {
    label : string;
    href : string;
    icon: string;
}

const sideBarItems: SidebarItemsProps[] = [
    {
        label: 'Home',
        href: '/',
        icon: '/house.svg'
    },
    {
        label: 'Files',
        href: '/files',
        icon: '/files.svg'
    },
    {
        label: 'Users',
        href: '/users',
        icon: '/users.svg'
    }
]

export default function SidebarContent(){
    return (
        <div className='grid gap-2'>
            {sideBarItems.map(item => {
                return (
                    <Link href={item.href}>
                        <Button variant='sideBar'>
                            <Image
                                src={item.icon}
                                alt={item.label}
                                width={20}
                                height={20}
                            />
                            <p className='overflow-hidden text-ellipsis whitespace-nowrap'>{item.label}</p>
                        </Button>
                    </Link>
                )
            })}
        </div>
    )
}