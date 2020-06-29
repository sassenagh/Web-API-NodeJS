# Web-API-NodeJS

Web-API-NodeJS is an API middleware that manages some information regarding insurance policies and company clients.

## Getting Started

This API allows you to:

- Login with a user email -> You get a token that allows you to get all the requests as long as you are authorized with your role.
- Get user data filtered by user id -> Can be accessed by users with role "users" and "admin"
- Get user data filtered by user name -> Can be accessed by users with role "users" and "admin"
- Get the list of policies linked to a user name -> Can be accessed by users with role "admin"
- Get the user linked to a policy number -> Can be accessed by users with role "admin"

In order to see and check all requests to the API, you can use swagger in the following path:
http://localhost:5000/api-docs/

### Prerequisites

You need to have [Nodejs](https://nodejs.org/) already installed.

## Built With

- [Nodejs](https://nodejs.org/) - The javascript framework used

## Authors

- **Anna Alcaide** - _Initial work_ - [Web-API-NodeJS](https://github.com/sassenagh/Web-API-NodeJS)
