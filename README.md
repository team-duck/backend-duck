# WHAT THE DUCK?

## Description
What the duck is an application that allows user to create a survey, be able to edit it whenever they want to. If they feel like they don't need it anymore is that they can also delete it.

We implemented a feature that allows user to see a graphic with other's people answers.

This application gives you the ability to create as many content as you need to create and each of the content will be represented in a chart using CanvasJS.


[Nicholas Powel](https://github.com/orgs/team-duck/people/nicholaspowel)
[Danny Pham](https://github.com/orgs/team-duck/people/dnnyp)
[Michelle Rahman](https://github.com/MichelleRahman21)


## MVP User Stories

> - As an unregistered user, I would like to sign up with email and password.
> - As a registered user, I would like to sign in with email and password.
> - As a signed in user, I would like to change password.
> - As a signed in user, I would like to sign out.
> - As a signed in user, I would like to create a survey with a title and possible answers.
> - As a signed in user, I would like to update my survey's title and possible answers of a survey.
> - As a signed in user, I would like to delete my survey.
> - As a signed in user, I would like to see all surveys and its answers.
> - As a signed in user, I would like to take a survey.

## Reach Goal(s)
Make the dashboard real-time, so you can see answers pour in as they're completed.
Each live survey should be hosted at a unique, randomly-generated URL.
API Paths & Methods
------
### Authentication

| Method | URL
|--------|------------------------
| POST   | `/sign-up`
| POST   | `/sign-in`
| PATCH  | `/change-password/`
| DELETE | `/sign-out/`

### Surveys/Titles

| Method   | URL
|--------|------------------------
| POST   | `/surveys`
| GET    | `/surveys`
| GET    | `/surveys`
| PATCH  | `/surveys/:id`
| DELETE | `/surveys/:id`

### Options

| Method   | URL
|--------|------------------------
| POST   | `/responses`
| PATCH  | `/responses/:id`
| DELETE | `/responses/:id`

## Wireframes
![Wireframe](https://i.imgur.com/6GJLI99.png)

![Wireframe](https://i.imgur.com/uoD9G9K.png)

![Wireframe](https://i.imgur.com/VUqbzX3.png)

![Wireframe](https://i.imgur.com/Nb9PLRR.png)

![Wireframe](https://i.imgur.com/PcNw9ew.png)

![Wireframe](https://i.imgur.com/7gzVFcu.png)
## Tools

### Deployment

Github
Heroku

### Authentication

jQuery for DOM manipulation and event handling
AJAX

### Front-end
Html
CSS
Animated CSS
JavaScript
Bootrasp
Handlebars
CanvasJS
jQuery
AJAX

### Back-end
Postman
Socket.io
Express (Created 4RESTful routes for handling (GET, POST,PUT,PATCH and DELETE) requests)

### Database
MongoDb
Mongoose

## Links!

[Visit our back-end repo!](https://github.com/team-duck/backend-duck)

[Backend url](https://still-scrubland-32932.herokuapp.com/)

here goes front end url

## Unsolved problems
Create more than 4 questions
