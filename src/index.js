import logger from './logger.js'
import { app } from './app.js'

const port = process.env.PORT || 3000

app.listen({ port }, function (err) {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})

process.env.LOG_LEVEL === 'debug' && logger.debug(`Debug activated`)
