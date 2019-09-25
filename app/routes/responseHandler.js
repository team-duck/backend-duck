'use strict'

/*
{
  user: uniqueId,
  answers: [
    {
      id: question._id
      response: response._id
    },
    {
      id: question._id
      response: response._id
    },
    {
      id: question._id
      response: response._id
    },
    {
      id: question._id
      response: response._id
    }
    ]
  }
*/

const responseHandler = function (survey, userResponse) {
  // we need to find the question by id?
  // once we have the question we need to update the response with user name
  userResponse.answers.forEach(answer => {
    // find response based on question and response id
    console.log('answer.id=', answer.id)
    let response = survey.questions.id(answer.id)
    if (response) {
      response = response.responses.id(answer.response)
    } else {
      throw new Error('No response found')
    }
    // add userId to response user array
    response.users.push(userResponse.user)
  })
  return survey.save()
}

module.exports = responseHandler
