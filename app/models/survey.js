const mongoose = require('mongoose')
const Schema = mongoose.Schema
const questionSchema = require('./question')

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
  questions: [questionSchema]
}, {
  timestamps: true
})

module.exports = mongoose.model('Survey', surveySchema)
// const Person = mongoose.model('Person', personSchema);
