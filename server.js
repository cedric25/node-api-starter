const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

const port = process.env.PORT || 3000
app.listen(port)
console.log(`Server listening on ${port}...`)
