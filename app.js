const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Olá! RM337931, RM337932, RM337933 e RM337916'
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
