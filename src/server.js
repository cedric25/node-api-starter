import logger from './logger.js'
import { app } from './app.js'

const port = process.env.PORT || 3000

app.listen(port)

logger.info(`Server listening on port ${port}...`)

process.env.LOG_LEVEL === 'debug' && logger.debug(`Debug activated`)
