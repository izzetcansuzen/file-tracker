import InfoCard from "@/app/(dashboard)/InfoCard";
import {DataTable} from "@/app/(dashboard)/DataTable";
import {columns, UserFiles} from "@/app/(dashboard)/Columns";

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

async function getData(): Promise<UserFiles[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            name: "John",
            file: "Ehliyet",
            end_date: "12.20.2025",
            remaining_day: 12
        },
        // ...
    ]
}

export default async function Home() {
    const data = await getData()
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
            <DataTable columns={columns} data={data} />
        </div>

)
}