const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { add } = require('./utils')

const app = express()

app.use(morgan('tiny'))

app.get('/', function (req, res) {
  const result = add(2, 2)
  res.send(`Hello World, result is ${result}`)
})

app.post('/', bodyParser.json(), function (req, res) {
  res.send(`You sent me ${JSON.stringify(req.body)}`)
})

module.exports = app
