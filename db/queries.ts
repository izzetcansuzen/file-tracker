import db from "./drizzle"
import {cache} from "react";
import {files} from "@/db/schema";

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