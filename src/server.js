import log from './logger.js'
import { app } from './app.js'

const port = process.env.PORT || 3000
app.listen(port)
log.info(`Server listening on ${port}...`)
process.env.LOG_LEVEL === 'debug' && log.debug(`Debug activated`)
