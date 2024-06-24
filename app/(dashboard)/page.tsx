import InfoCard from "@/app/(dashboard)/InfoCard";
import {DataTable} from "@/app/(dashboard)/DataTable";
import {columns} from "@/app/(dashboard)/Columns";
import {getFiles} from "@/db/queries";

interface cardData {
    title: string;
    color: string;
    value: number;
}

const cardData: cardData[] = [
    {
        title: "Toplam Dosya",
        color: "success",
        value: 20
    },
    {
        title: "5 Gün Sonra Biten",
        color: "warning",
        value: 15
    },
    {
        title: "Süresi Geçen Dosyalar",
        color: "destructive",
        value: 1
    },
]

export default async function Home() {
    let data = await getFiles()
    return (
        <div className='grid gap-4'>
            <div className='grid grid-cols-auto-fit-100 gap-2 justify-items-center'>
                {cardData.map(data => {
                    return (
                        <InfoCard
                            data={data}
                        />
                    )
                })}
            </div>
            <div className='w-full overflow-scroll'>
                <DataTable columns={columns} data={data} />
            </div>
        </div>
)
}