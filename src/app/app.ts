import Fastify from 'fastify'
import logger from '../logger'
import { add } from '../utils/utils'
import plugins from './plugins/index'
import routes from './routes/index'

export function buildFastify(fastifyOptions = {}) {
  const app = Fastify(fastifyOptions)

  app.register(plugins)
  app.register(routes)

  app.get('/', (request, reply) => {
    logger.debug('Handling request for endpoint: GET /')
    const result = add(2, 2)
    reply.send(`Hello World, result is ${result}`)
  })

  app.post('/', (request, reply) => {
    logger.debug('Handling request for endpoint: POST /')
    reply.send(`You sent me ${JSON.stringify(request.body)}`)
  })

  return app
}
