import { faker } from '@faker-js/faker'
import { connection, db } from './db'
import { users } from './schema.drizzle'

async function seed() {
  await db.insert(users).values({
    id: crypto.randomUUID(),
    email: faker.internet.email(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
  })
}

seed()
  .then(() => {
    connection.end()
    console.log('Database seeded ...')
  })
  .catch(console.error)
