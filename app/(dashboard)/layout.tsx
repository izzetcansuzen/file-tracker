import Sidebar from "@/app/(dashboard)/Sidebar";
import Header from "@/app/(dashboard)/Header";

type Props = {
    children: React.ReactNode;
}

export default function HomeLayout({children}: Props){
    return (
        <div className=''>
            <Sidebar className='hidden lg:flex'/>
            <Header />
            <main className='bg-red-500 h-screen w-full pl-56'>

            </main>
        </div>
    )
}