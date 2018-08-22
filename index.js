const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const mongodb = require("mongodb");

const ObjectID = mongodb.ObjectID;
const CONFESSIONS_COLLECTION = "confessions";

const app = express();

app.use(bodyParser.json());
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

let db = null

mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", { useNewUrlParser: true }, function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

  // Initialize the app.
  const server = app.listen(process.env.PORT || 5000, function () {
    const port = server.address().port;
    console.log("App now running on port", port);
  });
});

/*  "/api/confessions"
 *    GET: finds all confessions
 *    POST: creates a new confession
 */
app.get("/api/confessions", function(req, res) {
  db.collection(CONFESSIONS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get confessions.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/confessions", function(req, res) {
  const newConfession = req.body;
  newConfession.createdAt = new Date();

  if (!newConfession.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  } else {
    db.collection(CONFESSIONS_COLLECTION).insertOne(newConfession, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new confession.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  }
});


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
