import type { FastifyInstance } from 'fastify'

export function createOneTestUser({
  serverInstance,
  testUserId,
  testUserEmail,
}: {
  serverInstance: FastifyInstance
  testUserId: string
  testUserEmail: string
}) {
  const { user } = serverInstance.db
  return user.create({
    data: {
      user_id: testUserId,
      email: testUserEmail,
    },
  })
}
