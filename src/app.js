import Fastify from 'fastify'
import logger from './logger.js'
import { add } from './utils/utils.js'

export const app = Fastify({ logger: true })

app.get('/', (request, reply) => {
  logger.debug('Handling request for endpoint: GET /')
  const result = add(2, 2)
  reply.send(`Hello World, result is ${result}`)
})

app.post('/', (request, reply) => {
  logger.debug('Handling request for endpoint: POST /')
  reply.send(`You sent me ${JSON.stringify(request.body)}`)
})
