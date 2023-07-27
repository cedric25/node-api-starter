import plugin from 'fastify-plugin'
import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

// Add monitoring for Prisma in DataDog
// Uncomment those lines if you'd like to analyze all queries!
// const prismaClient = new PrismaClient({
//   log: [
//     {
//       emit: 'event',
//       level: 'query',
//     },
//   ],
// })
// prismaClient.$on('query', e => {
//   console.log('\n-----')
//   console.log('Query: ' + e.query)
//   console.log('Params: ' + e.params)
//   console.log('Duration: ' + e.duration + 'ms')
//   console.log('\n')
// })

declare module 'fastify' {
  interface FastifyInstance {
    db: PrismaClient
  }
}

/**
 * handle connection with the database
 */
export default plugin(async instance => {
  instance.decorate('db', prismaClient)
})
