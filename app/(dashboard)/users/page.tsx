import { columns } from "./columns"
import { DataTable } from "./data-table"
import {getUsersAndFiles} from "@/db/queries";

export default async function Users(){
    let data = await getUsersAndFiles()

    return (
        <DataTable columns={columns} data={data} />
    )
}