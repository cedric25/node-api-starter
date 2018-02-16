const express = require('express')
const { add } = require('./utils')

const app = express()

app.get('/', function (req, res) {
  const result = add(2, 2)
  res.send(`Hello World, result is ${result}`)
})

module.exports = app
