import logger from './logger'
import { app } from './app'
import { env } from './env'

const port = env.PORT || 3000

const start = async () => {
  try {
    await app.listen({ port })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()

env.LOG_LEVEL === 'debug' && logger.debug(`Debug activated`)
