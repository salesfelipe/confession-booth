const mongodb = require('mongodb')

const ObjectID = mongodb.ObjectID

const CONFESSIONS_COLLECTION = 'confessions'

class ConfessionService {
  constructor(dbConnection) {
    this.connection = dbConnection.collection(CONFESSIONS_COLLECTION)
  }

  async createConfession(confession) {
    confession.createdAt = new Date()
    confession.likes = []

    return await this.connection.insertOne(confession)
  }

  async getConfessions() {
    let confessions = null

    confessions = await this.connection.find({})
    confessions = await confessions.toArray()

    return confessions
  }

  async getConfession(id) {
    const confession = await this.connection.findOne({ _id: ObjectID(id) })

    return confession
  }

  async upVote(id, userName) {
    const confession = await this.getConfession(id)

    if (!(confession && confession.likes.includes(userName))) {
      confession.likes.push(userName)

      this.updateLikes(id, confession.likes)
    }

    return confession
  }

  async downVote(id, userName) {
    const confession = await this.getConfession(id)

    if ((confession && confession.likes.includes(userName))) {
      confession.likes = confession.likes.filter(value => value !== userName)

      this.updateLikes(id, confession.likes)
    }

    return confession
  }

  async updateLikes(id, likes) {
    const query = { _id: ObjectID(id) }
    const newValue = { $set: { likes: likes } }

    await this.connection.updateOne(query, newValue)
  }
}

module.exports = ConfessionService
