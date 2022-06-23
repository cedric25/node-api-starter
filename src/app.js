import express from 'express'
import morgan from 'morgan'
import logger from './logger.js'
import { add } from './utils/utils.js'

export const app = express()

app.use(morgan('tiny'))

app.get('/', (req, res) => {
  logger.debug('Handling request for endpoint: GET /')
  const result = add(2, 2)
  res.send(`Hello World, result is ${result}`)
})

app.post('/', express.json(), (req, res) => {
  logger.debug('Handling request for endpoint: POST /')
  res.send(`You sent me ${JSON.stringify(req.body)}`)
})
