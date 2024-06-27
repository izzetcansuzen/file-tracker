import InfoCard from "@/app/(dashboard)/InfoCard";
import {DataTable} from "@/app/(dashboard)/DataTable";
import {columns} from "@/app/(dashboard)/Columns";
import {getFiles} from "@/db/queries";

interface cardData {
    title: string;
    color: string;
    status: string;
}

const cardData: cardData[] = [
    {
        title: "Toplam Dosya",
        color: "success",
        status: "length",
    },
    {
        title: "5 Gün Sonra Biten",
        color: "warning",
        status: "left"
    },
    {
        title: "Süresi Geçen Dosyalar",
        color: "destructive",
        status: "expired"
    },
]

export default async function Home() {
    let data = await getFiles()

    return (
        <div className='grid gap-4'>
            {JSON.stringify(data, null, 2)}
            <div className='grid grid-cols-auto-fit-100 gap-2 justify-items-center'>
                {cardData.map(cardData => {
                    return (
                        <InfoCard
                            cardData={cardData}
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