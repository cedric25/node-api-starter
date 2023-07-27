import chai from 'chai'
import dirtyChai from 'dirty-chai'
import type { Context } from 'mocha'
import { env } from '../../src/env'
import { buildFastify } from '../../src/app/app'
import { initModules } from '../../src/app/routes/initModules'
import { createOneTestUser } from './createOneTestUser'
import { dropTestDatabase } from './dropTestDatabase'

chai.use(dirtyChai)

if (env.NODE_ENV !== 'test') {
  throw new Error(
    `Expected NODE_ENV environment variable to equal "test" but got ${env.NODE_ENV}`
  )
}

console.log('process.env.DATABASE_URL', env.DATABASE_URL)
if (!/test/.test(env.DATABASE_URL as string)) {
  throw new Error(
    `It looks like the db name you are targeting with your integration tests does not contain the keyword 'test': ${env.DATABASE_URL}`
  )
}

before(async function (this: Context) {
  this.serverInstance = buildFastify()
  await this.serverInstance.ready()
})

beforeEach(async function (this: Context) {
  // Due to how Mocha initializes the test context,
  // this function MUST refer to the same `this` as the beforeEach (ie. use an arrow function syntax)
  this.resetDatabase = async () => {
    if (!this.serverInstance) {
      await this.initServerInstance()
    }

    await dropTestDatabase({ db: this.serverInstance.db })

    // Reset all modules dependencies (which might have been changed for testing purpose)
    initModules(this.serverInstance.db)

    this.testUserId = 'user_test_123'
    this.testUserEmail = 'test-user-123@test.com'
    this.testUser = await createOneTestUser({
      serverInstance: this.serverInstance,
      testUserId: this.testUserId,
      testUserEmail: this.testUserEmail,
    })

    this.db = this.serverInstance.db
  }

  await this.resetDatabase()
})
