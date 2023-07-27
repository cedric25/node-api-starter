import type { FastifyInstance } from 'fastify'
import plugin from 'fastify-plugin'
import prisma from './prisma'

export default plugin(async (instance: FastifyInstance) => {
  instance.register(prisma)
})
