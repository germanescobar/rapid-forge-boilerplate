/**
 * This file is a schema definition for a PostgreSQL database.
 */

import { pgTable, timestamp, varchar } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: varchar('id').primaryKey(),
  email: varchar('email').notNull().unique(),
  first_name: varchar('first_name'),
  last_name: varchar('last_name'),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
})
