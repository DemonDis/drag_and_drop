const express = require('express')
const userRouter = require('./routers/user.routers')
const cors = require('cors');

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors());

app.use(express.json())
app.use('/', cors(), userRouter)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
