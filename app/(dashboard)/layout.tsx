import Sidebar from "@/app/(dashboard)/Sidebar";
import Header from "@/app/(dashboard)/Header";
import { currentUser } from '@clerk/nextjs/server';
import SignOutButton from "@/app/(dashboard)/SignOutButton";

type Props = {
    children: React.ReactNode;
}

export default async function HomeLayout({children}: Props) {
    const user = await currentUser();
    return (
        <div>
            {user?.emailAddresses[0].emailAddress.includes("vip")
                ?
                <div className=''>
                    <Sidebar className='hidden lg:flex'/>
                    <Header/>
                    <main className='p-4 h-screen w-full lg:pl-60 mt-2'>
                        {JSON.stringify(user?.emailAddresses[0].emailAddress, null, 2)}
                        {children}
                    </main>
                </div>
                :
                <SignOutButton />
            }
        </div>

)
}