# Local Talent Backend

## Frontend GitHub Repository: https://github.com/MelkWold/localTalentFrontend

## Project Description and Features
Local Talent Matcher is a full stack website that matches local professionals and service providers (E.g. tutors, electricians, accountants, plumbers, software engineers, web developers etc) with local clients (individuals, small businesses, mom-and-pop businesses, etc). Customers will be able to search for talented individuals based on services, hire them for a task and pay them using standard payment processing methods. After the completion of the task, both providers and customers will be able to rate each other and write reviews about their experiences. 

## Programming Language, Tools and Frameworks used:
The backend is build using the following tools, packages:
- Node.js
- Express.js
- Axios
- JavaScript
- dotenv
- Mongoose
- MongoDB
- express-validator
- jsonwebtoken
- bcrypt

## API EndPoints
|   Method  |          Endpoint                |    Description                         |
|-----------|----------------------------------|----------------------------------------|
|    POST   | /api/auth/register               | Register new user and return JWT Token |
|    POST   | /api/auth/login                  | Authenticate user and retern JWT Token |
|    GET    | /api/auth/users                  | Get currently authenticated user       |
|    GET    | /api/users                       | Get all users in the database          |
|    GET    | /api/users/:id                   | Get a user by id                       |
|    PUT    | /api/users/:id                   | Update a specific user by id           |
|  DELETE   | /api/users/:id                   | Delete a specific user by id           |
|   POST    | /api/auth                        | Authenticate and get a token           |
|    POST   | /api/reviews                     | Create a new review                    |
|    GET    | /api/reviews                     | Get all reviews in the database        |
|    GET    | /api/reviews/:id                 | Get a review by id                     |
|    PUT    | /api/reviews/:id                 | Update a specific review by id         |
|  DELETE   | /api/reviews/:id                 | Delete a specific review by id         |
|    POST   | /api/tasks                       | Create a new task                      |
|    GET    | /api/tasks                       | Get all tasks in the database          |
|    GET    | /api/tasks/:id                   | Get a task by id                       |
|    PUT    | /api/tasks/:id                   | Update a specific task by id           |
|  DELETE   | /api/tasks/:id                   | Delete a specific task by id           |
|    POST   | /api/transactions                | Create a new transaction               |
|    GET    | /api/transactions                | Get all transactions in the database   |
|    GET    | /api/transactions/:id            | Get a transaction by id                |
|    PUT    | /api/transactions/:id            | Update a specific transaction by id    |
|  DELETE   | /api/transactions/:id            | Delete a specific transaction by id    |
|    POST   | /api/messages                    | Create a new message                   |
|    GET    | /api/messages                    | Get all messages in the database       |
|    GET    | /api/messages/:id                | Get a transaction by id                |
|    PUT    | /api/messages/:id                | Update a specific transaction by id    |
|  DELETE   | /api/messages/:id                | Delete a specific transaction by id    |
|    POST   | /api/messages                    | Create a new message                   |
|    GET    | /api/messages                    | Get all messages in the database       |
|    GET    | /api/messages/:id                | Get a transaction by id                |
|    PUT    | /api/messages/:id                | Update a specific transaction by id    |
|  DELETE   | /api/messages/:id                | Delete a specific transaction by id    |



====================ONLY FOR TESTING ================================
DELETE BEFORE SUBMITING
This is a temporary username and password for testing! 
TEST REGISTER a new user: POST /api/auth/register
{ 
  "userName": "Melkamu Woldemariam",
  "email": "melk@melk.com",
  "password": "BestPassword@2025",
  "role":"Provider"
}

TEST LOGIN an existing user: POST /api/auth/login

{ 
  "email": "melk@melk.com",
  "password": "BestPassword@2025"
}

======================================================================