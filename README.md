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

## Middleware
- authenticateAuth - for authenticating users
- globalErrorHandling - for handling global errors
- loggingMiddleware - to log server requests
- adminAuth- to authenticate admin (not fully implemented yet.)

## Schema
1. usersSchema- to generate the Users model and validate user creation
2. reviewsSchema - to generate the Reviews model and validate review creation
3. taskSchema - to generate the Tasks model and validate task creation
4. transactionsSchema - to generate the Transactions model and validate transaction creation
5. messagesSchema - to generate the Messages model and validate message creation

## API EndPoints
The following API Endpoints allow CRUD operations on the project. 
Note: Even though all the endpoints are tested and working, some of them are not yet integrated into the frontend because of time. Future developments are planned to fully integrate all the APIs and create additional ones that may be needed.  
|   Method  |          Endpoint                |    Description                         |
|-----------|----------------------------------|----------------------------------------|
|    POST   | /api/auth/register               | Register new user and return JWT Token |
|    POST   | /api/auth/login                  | Authenticate user and retern JWT Token |
|    GET    | /api/users/me                    | Get currently authenticated user       |
|    GET    | /api/users                       | Get all users in the database          |
|    GET    | /api/users/:id                   | Get a user by id                       |
|    PUT    | /api/users/:id                   | Update a specific user by id           |
|  DELETE   | /api/users/:id                   | Delete a specific user by id           |
|   POST    | /api/auth                        | Authenticate and get a token           |
|    POST   | /api/reviews                     | Create a new review                    |
|    GET    | /api/reviews                     | Get all reviews in the database        |
|    GET    | /api/reviews/:id                 | Get a review by id                     |
|    GET    | /api/reviews/myreviews           | Get reviews for the authenticated user |
|    PUT    | /api/reviews/:id                 | Update a specific review by id         |
|  DELETE   | /api/reviews/:id                 | Delete a specific review by id         |
|    POST   | /api/tasks                       | Create a new task                      |
|    GET    | /api/tasks                       | Get all tasks in the database          |
|    GET    | /api/tasks/:id                   | Get a task by id                       |
|    GET    | /api/tasks/mytasks               | Get tasks for the authenticated user   |
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

## Project Management Tools Used
- JIRA (https://melkamuwoldemariam.atlassian.net/jira/software/projects/PC/boards/4?atlOrigin=eyJpIjoiZmE5MDdmMTlmNWNmNDA5OGJlM2EwYjlhNjhjNDRhYzUiLCJwIjoiaiJ9)

## Wireframing
- Figma (https://www.figma.com/design/1Ua77QBrzd4ws1pCf8jxhn/Local-Talent?node-id=0-1&t=jW26fzXYL3h6w32V-1)