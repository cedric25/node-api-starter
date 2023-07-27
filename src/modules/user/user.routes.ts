import type { FastifyInstance } from 'fastify'
import type { PrismaClient } from '@prisma/client'
import { UserDao } from './dao/user.dao'
import { userDi } from './user.di'
import { fetchUsersRoute } from './useCases/fetchUsers/fetchUsers.handler'

// prefix: '/users'
export const userRoutes = async (instance: FastifyInstance) => {
  fetchUsersRoute(instance)
}

export function initUserModule(prismaClient: PrismaClient) {
  const { user } = prismaClient

  const usersDao = new UserDao({ user })
  userDi.register('userDao', usersDao)

  // Check that all services are well instantiated
  const allDependencies = userDi.getAllDependencies()
  for (const [dependencyKey, dependency] of Object.entries(allDependencies)) {
    if (dependency === undefined) {
      throw new Error(
        `Could not instantiate 'user' module dependency: ${dependencyKey}`
      )
    }
  }
}
