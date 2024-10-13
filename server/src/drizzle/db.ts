import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema.drizzle'

const url = process.env.DATABASE_URL
if (!url) {
  throw new Error('DATABASE_URL is required')
}

export const connection = postgres(url)
export const db = drizzle(connection, { schema })
