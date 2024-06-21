import {cn} from "@/lib/utils";

type Props = {
    className?: string;
}

export default function Sidebar({className}: Props) {
    return (
        <div className={cn('h-screen fixed bg-blue-500 w-56 left-0 top-0 px-4 border-r-2 flex-col', className)}>
            Sidebar
        </div>
    )
}