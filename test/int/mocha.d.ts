import type { Fastify } from 'fastify'

declare module 'mocha' {
  export interface Context {
    serverInstance: Fastify
    testUserId: string
    testUserEmail: string
    testUser: {
      user_id: string
      email: string
    }
  }
}
