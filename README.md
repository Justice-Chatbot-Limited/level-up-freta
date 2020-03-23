## Justice Bot Backend Levelup

In this project, you are part of a team building a blog platform. One requirement is for a REST API service to provide posts information using the Nodejs Express framework. The requirements include authenticating, filtering and ordering requirements, response codes and error messages for the queries you must implement.

The definitions and a detailed requirements list follow. You will be graded on whether your application performs data retrieval and manipulation based on given use cases exactly as described in the requirements.

### Features
#### Required features
-   Users should be able to sign up
-   Users should be able to sign in
-   Users should be able to add a new post
-   Users should be able to update a single post
-   Users should be able to retrieve a single post
-   Users should be able to delete a single post
-   Users should be able to retrive all posts


#### Optional features
-   Order posts by title, description, created date, etc.
-   Filter post by title, description, etc.

### Model
-   User
  ```js
    {
      id: String|Required,
      email: String|Required,
      username: String|Required,
      password: String|Required,
      createdAt: Date|Required,
      updatedAt: Date|Required,
    }
  ```
-   Post
  ```js
    {
      id: String|Required,
      poster: String|Required,
      title: String|Required,
      description: String|Required,
      createdAt: Date|Required,
      updatedAt: Date|Required,
    }
  ```
### Responses
#### Generic Responses
-   Success reposnse
  ```js
    {
      status: Integer,
      message: String,
      data: Object|Array
    }
  ```

-   Error response
  ```js
  {
    status: Integer,
    error: String
  }
  ```
#### Request Body User
-   POST /auth/signup
  ```js
  {
    email: String|Required,
    username: String|Required,
    password: String|Required,
  }
  ```
-   POST /auth/signin
  ```js
  {
    username: String|Required,
    password: String|Required,
  }
  ```
#### Success User response
-   POST /auth/signup
  ```js
  {
    status: 201,
    data : {
      id: String|Required,
      email: String|Required,
      username: String|Required,
      token: String|Required,
    }
  }
  ```
-   POST /auth/signin
  ```js
  {
    status: 200,
    data : {
      id: String|Required,
      username: String|Required,
      token: String|Required,
    }
  }
  ```

#### Success Posts response
-   POST /posts
  ```js
  {
    status: 201,
    data : {
      id: String|Required,
      poster: String|Required,
      title: String|Required,
      description: String|Required,
      createdAt: Date|Required,
      updatedAt: Date|Required,
    }
  }
  ```
-   UPDATE /posts/postId
  ```js
  {
    status: 200,
    data : {
      id: String|Required,
      poster: String|Required,
      title: String|Required,
      description: String|Required,
      createdAt: Date|Required,
      updatedAt: Date|Required,
    }
  }
  ```
-   DELETE /posts/postId
  ```js
  {
    status: 200,
    data : {
      id: String|Required,
      poster: String|Required,
      title: String|Required,
      description: String|Required,
      createdAt: Date|Required,
      updatedAt: Date|Required,
    }
  }
  ```
-   GET /posts/postId
  ```js
  {
    status: 200,
    data : {
      id: String|Required,
      poster: String|Required,
      title: String|Required,
      description: String|Required,
      createdAt: Date|Required,
      updatedAt: Date|Required,
    }
  }
  ```
-   GET /posts
  ```js
  {
    status: 200,
    data : [
      {
        id: String|Required,
        poster: String|Required,
        title: String|Required,
        description: String|Required,
        createdAt: Date|Required,
        updatedAt: Date|Required,
      }
    ]
  }
  ```

### Technologies
-   Node/Express
-   MySQL
-   Sequelize
-   Jest/Supertest


### Recommended packages
-   [Hapi/Joi](https://hapi.dev/family/joi/): Joi is a validation library that can be used in express application to validate the body of the request.
-   [Sequelize](https://sequelize.org/master/): Sequelize is a SQL object modeling tool designed to work in an asynchronous environment.
-   [Babel-watch](https://www.npmjs.com/package/babel-watch): Reload your babel-node app on JS source file changes. And do it fast.
-   [Bcrypt](https://www.npmjs.com/package/bcryptjs): Bcrypt is a password hashing algorithm.
-   [Eslint](https://www.npmjs.com/package/eslint): ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
-   [JWT](https://www.npmjs.com/package/jsonwebtoken): JWT is an open standard that defines a compact and self-contained way of securely transmitting information between parties as a JSON object.
-   [Jest](https://jestjs.io/docs/en/getting-started): Jest is a testing library.
-   [SuperTest](https://www.npmjs.com/package/supertest): Super Test is an API testing library.

### Acceptance criteria
-   You should setup babel and use es6 features
-   All the endpoints should work as expected
-   Some endpoints should have request validation(Post & Update)
-   Features should be implemented in different branches
-   Only authenticated users can perform the CRUD operations outlined above
-   Check users email before sign up so that an email cannot be used twice to create a user
-   Encrypt or hash the password before saving it
-   All the endpoints should be tested

### Basic Project Structure
[Project Structure](./src)
### Author
-   [Verdotte Aututu](https://github.com/verdotte)
