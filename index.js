const express = require('express')
const app = express()
const port = 3000

// Matthew Hope 043473024 
app.get('/', (req, res) => {
  res.send('Hello WEB322!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
