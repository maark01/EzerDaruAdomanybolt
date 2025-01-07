const cors = require('cors')
const express = require('express')
const Routes = require('./src/routes/routes')
require('./src/google/auth')
require('dotenv').config()


const app = express()
const port = process.env.BACK_PORT

app.use(cors())

app.use('/', Routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))