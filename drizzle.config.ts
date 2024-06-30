import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
    schema: './db/schema.ts',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.NEXT_PUBLIC_DATABASE_URL,
    },
};