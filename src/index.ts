import logger from './logger'
import { buildFastify } from './app/app'
import { env } from './env'

const port = env.PORT || 3000

const server = buildFastify({
  logger: true,
})

const start = async () => {
  try {
    await server.listen({ port })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

server.addHook('onClose', async instance => {
  logger.info('fastify hook onClose')
  await instance.db.$disconnect()
})

start()

env.LOG_LEVEL === 'debug' && logger.debug(`Debug activated`)
