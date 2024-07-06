import { columns } from "./columns"
import { DataTable } from "./data-table"
import {getUsersAndFiles} from "@/db/queries";
import {AddUserSection} from "@/components/AddUserSection";

export default async function Users(){
    let data = await getUsersAndFiles()

    return (
        <div>
            <div className='flex justify-end mb-2'>
                <AddUserSection />
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}