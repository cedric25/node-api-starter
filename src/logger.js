import bunyan from 'bunyan'

export default bunyan.createLogger({
  name: 'my-super-api',
  streams: [
    {
      level: process.env.LOG_LEVEL || 'info',
      stream: process.stdout,
    },
  ],
})
