import {Button} from "@/components/ui/button";

interface InfoCardProps{
    cardData: {
        title: string;
        color: string | any;
        value: number;
    }
}

export default function InfoCard({cardData} : InfoCardProps){
    return (
        <div className='p-4 bg-white shadow-md rounded-md w-[80%] flex justify-between items-center'>
            <h4 className='font-bold text-xs md:text-lg'>{cardData.title}</h4>
            <Button variant={cardData.color} className='font-bold text-white w-10'>
                {cardData.value}
            </Button>
        </div>
    )
}