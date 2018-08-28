const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
const ConfessionService = require('./services/ConfessionService.js')
const app = express()

app.use(bodyParser.json())
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')))

let confessionService = null

mongodb.MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test', { useNewUrlParser: true }, function (err, client) {
  if (err) {
    console.log(err)
    process.exit(1)
  }

  // Save database object from the callback for reuse.
  confessionService = new ConfessionService(client.db())
  console.log('Database connection ready')

  // Initialize the app.
  const server = app.listen(process.env.PORT || 5000, function () {
    const port = server.address().port
    console.log('App now running on port', port)
  })
})

/*  "/api/confession"
 *    GET: finds all confessions
 *    POST: creates a new confession
 */
app.get('/api/confession', async function(req, res) {
  const confessions = await confessionService.getConfessions()

  res.status(200).json(confessions)
})

app.post('/api/confession', async function(req, res) {
  const newConfession = req.body

  await confessionService.createConfession(newConfession)
  const confessions = await confessionService.getConfessions()

  res.status(201).json(confessions)
})

/*  "/api/confession/:id/upVote"
 *    PATCH: upVote confession
 */
app.patch('/api/confession/:id/upvote', async (req, res) => {
  const id = req.params.id
  const userName = req.body.userName

  await confessionService.upVote(id, userName)

  res.status(204)
})

/*  "/api/confession/:id/downVote"
 *    PATCH: downVote confession
 */
app.patch('/api/confession/:id/downvote', async (req, res) => {
  const id = req.params.id
  const userName = req.body.userName

  await confessionService.downVote(id, userName)

  res.status(204)
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`))
})
