import { index, numeric, pgEnum, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';
export const statusEnum = pgEnum('status', ['ACTIVE', 'INACTIVE']);


export const clients = pgTable('clients', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    type: text('type').notNull(),
    poc: text('poc').notNull(),
    role: text('role').notNull(),
    email: text('email').notNull().unique(),
    phone: text('phone').notNull(),
    secondaryPhone: varchar('secondary_phone').notNull(),
    status: statusEnum('status').default("ACTIVE"),
    remarks: text('remarks'),
    bussinessUrl: text('bussiness_url'),
    address: text('address'),
    state: varchar('state'),
    city: varchar('city'),
    country: varchar('country'),
    totalInvoiceAmount: numeric('total_invoice_amount', { precision: 100, scale: 2 }),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),

}, (table: any) => {
    return {
        nameIdx: index("name_idx").on(table.name)
    };
});


export type client = typeof clients.$inferSelect; // return type when queried
export type newClient = typeof clients.$inferInsert; // insert type

export type clientTable = typeof clients;