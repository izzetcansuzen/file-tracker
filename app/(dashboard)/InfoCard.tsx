import {Button} from "@/components/ui/button";

interface InfoCardProps{
    data: {
        title: string;
        color: string | any;
        value: number;
    }
}

export default function InfoCard({data} : InfoCardProps){
    return (
        <div className='p-4 bg-white shadow-md rounded-md w-[80%] flex justify-between items-center'>
            <h4 className='font-bold text-xs md:text-lg'>{data.title}</h4>
            <Button variant={data.color} className='font-bold text-white w-10'>
                {data.value}
            </Button>
        </div>
    )
}