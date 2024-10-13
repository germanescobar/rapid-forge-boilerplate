export default {
  schema: './src/drizzle/schema.drizzle.ts',
  out: './src/drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  } 
}