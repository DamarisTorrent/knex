const express = require('express')
const app = express()
const port = 9000

const router = require('./router')
const { pathLogger } = require('./middleware/logger')

router(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})