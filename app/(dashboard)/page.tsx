import InfoCard from "@/app/(dashboard)/InfoCard";

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

export default function Home() {
    return (
        /*Info Card Container*/
        <div className='grid grid-cols-auto-fit-100 gap-2 justify-items-center'>
            {cardData.map(data => {
                return (
                    <InfoCard
                        data={data}
                    />
                )
            })}
        </div>
    )
}