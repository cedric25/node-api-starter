import log from './src/logger.js'
import { app } from './src/app.js'

const port = process.env.PORT || 3000
app.listen(port)
log.info(`Server listening on ${port}...`)
process.env.LOG_LEVEL === 'debug' && log.debug(`Debug activated`)
