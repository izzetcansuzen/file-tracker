import InfoCard from "@/app/(dashboard)/InfoCard";

export default function Home() {
    return (
        /*Info Card Container*/
        <div className='grid grid-cols-auto-fit-100 gap-2 justify-items-center'>
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
        </div>
    )
}