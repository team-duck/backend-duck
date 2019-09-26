'use strict'

const addSurveyToUser = (user, survey) => {
  const surveyId = survey.id
  if (user) {
    // if there is a user add a survey id
    user.answeredSurveys.push(surveyId)
    return user.save()
  } else {
  // if there is not a user we should throw an error
    throw new Error('There is not a user')
  }
}

module.exports = addSurveyToUser
