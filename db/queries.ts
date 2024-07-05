import db from "./drizzle"
import {cache} from "react";
import {files, users} from "@/db/schema";
import {eq} from "drizzle-orm";

export const getFiles = cache(async () => {
    const data = await db.query.files.findMany()

    if (!data || data.length === 0) {
        throw new Error("Veri bulunamadı");
    }

    const updatedData = data.map(file => {
        const startDate = new Date(file.startDate);
        const endDate = new Date(file.endDate);

        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            throw new Error(`Geçersiz tarih formatı: ${file.id}`);
        }

        const differenceInTime = endDate.getTime() - startDate.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);

        return {
            ...file,
            remainingDay: differenceInDays
        };
    });

    return updatedData;
})

export const getAllUserNamesAndIds = cache(async () => {
    const data = await db.query.users.findMany({
        columns: {
            id: true,
            name: true
        }
    })

    return data
})

export const getAllFileTypes = cache(async () => {
    const data = await db.query.fileTypes.findMany()

    if(!data || data.length < 0) {
        throw new Error("veri bulunamadı")
    }

    return data
})

export const addFile = async (fileData: []) => {
    return db.insert(files).values(fileData);
}

export const getUsersAndFiles = cache(async () => {

    const joinTable = await db.select().from(files).fullJoin(users, eq(files.userId, users.id))

    const newArr = joinTable.reduce((old, curr) => {
        const userIndex = old.findIndex(user => user.name === curr.users.name)

        if(userIndex === -1){
            old.push({
                name: curr.users.name,
                isActive: curr.users.isActive,
                files: curr.files ? [curr.files] : [],
                filesLength: curr.files ? 1 : 0
            })
        }else{
            if(curr.files){
                old[userIndex].files.push(curr.files)
                old[userIndex].filesLength = old[userIndex].files.length;
            }
        }

        return old
    }, [])

    return newArr
})