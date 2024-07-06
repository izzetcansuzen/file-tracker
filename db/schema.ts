import {boolean, date, integer, pgTable, serial, text} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    name: text('name').notNull(),
    email: text('email'),
    password: text('password'),
    isActive: boolean('is_active').notNull(),
    companyId: integer('company_id').references(() => companies.id),
})

export const companies = pgTable("companies", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
})

export const files = pgTable('files', {
    id: serial("id").primaryKey(),
    name: text('name').notNull(),
    startDate: date('start_date').notNull(),
    endDate: date('end_date').notNull(),
    userId: integer('user_id').references(() => users.id),
    typeId: integer('type_id').references(() => fileTypes.id),
})

export const fileTypes = pgTable("fileTypes", {
    id: serial("id").primaryKey(),
    name: text('name').notNull()
})