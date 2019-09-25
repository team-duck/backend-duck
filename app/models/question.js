const mongoose = require('mongoose')
const responseSchema = require('./response')
const Schema = mongoose.Schema

const questionSchema = Schema({
  inputType: String, // radio or check box or number field
  text: {
    type: String,
    required: true
  },
  index: Number, // order of the question
  responses: [responseSchema]
})

module.exports = questionSchema
