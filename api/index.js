import express from 'express'
import routes from './routes'

const app = express()

app.use('/v1', routes.v1)

// export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
