import type { PrismaClient } from '@prisma/client'

export class UserDao {
  #user

  constructor({ user }: { user: PrismaClient['user'] }) {
    this.#user = user
  }

  findAll() {
    return this.#user.findMany({
      orderBy: { email: 'asc' },
    })
  }
}
