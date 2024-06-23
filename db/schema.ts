import {boolean, integer, pgTable, serial, text} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
    isActive: boolean('is_active').notNull(),
    companyId: integer('company_id').references(() => companies.id),
})

export const companies = pgTable("compaines", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
})

export const files = pgTable("files", {
    id: serial("id").primaryKey(),
    name: text('name').notNull(),
    startDate: integer('start_date').notNull(),
    endDate: integer('end_date').notNull(),
    url: text('url').notNull(),
    userId: integer('id').references(() => users.id),
    typeId: integer('type_id').references(() => fileTypes.id),
})

export const fileTypes = pgTable("fileTypes", {
    id: serial("id").primaryKey(),
    name: text('name').notNull()
})