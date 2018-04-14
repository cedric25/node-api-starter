const logger = require('./src/logger')
const app = require('./src/app')

const port = process.env.PORT || 3000
app.listen(port)
logger.info(`Server listening on ${port}...`)
