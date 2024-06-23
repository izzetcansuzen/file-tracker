import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
    schema: './db/schema.ts',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        // @ts-ignore
        url: process.env.DATABASE_URL,
    },
};