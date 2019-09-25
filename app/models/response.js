const mongoose = require('mongoose')
const Schema = mongoose.Schema

const responseSchema = Schema({
  value: String, // the value of the response
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }] // users that chose that response
})

module.exports = mongoose.model('Survey', responseSchema)
