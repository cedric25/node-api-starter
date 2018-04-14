const bunyan = require('bunyan')

// PRODUCTION: Log JSON to stdout
if (process.env.NODE_ENV === 'production') {
  module.exports = bunyan.createLogger({
    name: 'my-super-api',
    streams: [
      {
        level: 'info',
        stream: process.stdout,
      },
    ]
  })
}
// DEVELOPMENT: Pretty logs with colors to stdout only
else {
  const bformat = require('bunyan-format')
  const formatOut = bformat({ outputMode: 'short' })

  module.exports = bunyan.createLogger({
    name: 'my-super-api',
    stream: formatOut,
    level: process.env.LOG_LEVEL || 'info',
  })
}
