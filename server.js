const log = require('./src/logger')
const app = require('./src/app')

const port = process.env.PORT || 3000
app.listen(port)
log.info(`Server listening on ${port}...`)
process.env.LOG_LEVEL === 'debug' && log.debug(`Debug activated`)
