const express =require('express')
const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('API root')
})

// export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
