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
            <main className='p-4 h-screen w-full lg:pl-60 mt-2'>
                {children}
            </main>
        </div>
    )
}