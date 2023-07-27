import { type FastifyInstance } from 'fastify'
import { fetchUsersUseCase } from './fetchUsers.useCase'

export function fetchUsersRoute(instance: FastifyInstance) {
  instance.get('/', async () => {
    const users = await fetchUsersUseCase()
    return { users }
  })
}
