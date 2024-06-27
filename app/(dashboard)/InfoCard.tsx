import {Button} from "@/components/ui/button";

interface FileData {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    url: string;
    userId: number;
    typeId: number;
    remainingDay: number;
}

interface CardData {
    title: string;
    status: string;
    color: string;
}

interface InfoCardProps {
    cardData: CardData;
    data: FileData[];
}

export default function InfoCard({cardData, data} : InfoCardProps){
    if(cardData.status == "left") {
        data = data.filter(item => item.remainingDay <= 5 && item.remainingDay > 0)
    }
    if(cardData.status == "expired"){
        data = data.filter(item => item.remainingDay <= 0)
    }

    return (
        <div className='p-4 bg-white shadow-md rounded-md w-[80%] flex justify-between items-center'>
            <h4 className='font-bold text-xs md:text-lg'>{cardData.title}</h4>
            <Button variant={cardData.color} className='font-bold text-white w-10'>
                {data.length}
            </Button>
        </div>
    )
}