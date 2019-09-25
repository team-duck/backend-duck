# WHAT THE DUCK?

## Description

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
| GET    | `/my-surveys`
| PATCH  | `/surveys/:id`
| DELETE | `/surveys/:id`

### Options

| Method   | URL
|--------|------------------------
| POST   | `/options`
| PATCH  | `/options/:id`
| DELETE | `/options/:id`

### Responses

| Method   | URL
|--------|------------------------
| POST   | `/responses`

## Wireframes
![Wireframe](https://michelle04.s3.amazonaws.com/New+Wireframe+2.png)

![Wireframe](https://i.imgur.com/0QMdTYE.png)
## Tools

### Deployment

Github
Heroku

### Authentication

jQuery for DOM manipulation and event handling
AJAX

### Front-end

### Back-end

## Links!

here goes front end repo
here goes back end url
here goes front end url

## Schedule
