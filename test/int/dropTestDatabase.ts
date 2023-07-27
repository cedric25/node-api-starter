import type { PrismaClient } from '@prisma/client'
import { env } from '../../src/env'

export async function dropTestDatabase({ db }: { db: PrismaClient }) {
  const databaseUrl = env.DATABASE_URL
  if (!databaseUrl || !/test/.test(databaseUrl)) {
    console.log('databaseUrl', databaseUrl)
    throw new Error(
      "Please don't run integration tests on anything else than a test database..."
    )
  }
  try {
    // https://www.prisma.io/docs/concepts/components/prisma-client/crud#deleting-all-data-with-raw-sql--truncate
    // Special fast path to drop data from a postgres database.
    // This is an optimization which is particularly crucial in a unit testing context.
    // This code path takes milliseconds, vs ~7 seconds for a migrate reset + db push
    const tablenames = await db.$queryRaw<
      Array<{ name: string }>
    >`SELECT name FROM sqlite_schema WHERE type ='table' AND name NOT LIKE 'sqlite_%'`

    for (const { name } of tablenames) {
      if (name !== '_prisma_migrations') {
        try {
          await db.$executeRawUnsafe(`DELETE FROM "${name}";`)
        } catch (error) {
          console.log({ error })
        }
      }
    }
  } catch (err) {
    console.error('[dropTestDatabase]', err)
  }
}
