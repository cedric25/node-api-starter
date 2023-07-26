import pino from 'pino'

export default pino({
  name: 'my-super-api',
  level: process.env.LOG_LEVEL || 'info',
})
