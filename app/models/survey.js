const mongoose = require('mongoose')
const Schema = mongoose.Schema

const surveySchema = Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  questions: [{
    type: Schema.Types.ObjectId,
    ref: 'Question'
  }]
})

module.exports = mongoose.model('Survey', surveySchema)
// const Person = mongoose.model('Person', personSchema);
