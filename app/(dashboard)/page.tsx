import InfoCard from "@/app/(dashboard)/InfoCard";
import {DataTable} from "@/app/(dashboard)/DataTable";
import {columns} from "@/app/(dashboard)/Columns";
import {getAllUserNamesAndIds, getFiles} from "@/db/queries";
import AddFileSection from "@/components/AddFileSection";

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
    let fileData = await getFiles()
    let userNameAndIds = await getAllUserNamesAndIds()

    return (
        <div className='grid gap-4'>
            {JSON.stringify(userNameAndIds, null, 2)}
            <div className='grid grid-cols-auto-fit-100 gap-2 justify-items-center'>
                {cardData.map(cardData => {
                    return (
                        <InfoCard
                            cardData={cardData}
                            data={fileData}
                        />
                    )
                })}
            </div>
            <div className='w-full overflow-scroll grid gap-2'>
                <div className='justify-self-end'>
                    <AddFileSection
                        userNameAndIds={userNameAndIds}
                    />
                </div>
                <DataTable
                    columns={columns}
                    data={fileData}
                />
            </div>
        </div>
)
}