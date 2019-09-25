const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = Schema({
  inputType: String, // radio or check box or number field
  text: {
    type: String,
    required: true
  },
  index: Number, // order of the question
  responses: [{
    type: Schema.Types.ObjectId,
    ref: 'Response'
  }]
})

module.exports = mongoose.model('Survey', questionSchema)
