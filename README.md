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
The following API Endpoints allow CRUD operations on the project. 
Note: Even though all the endpoints are tested and working, some of them are not yet integrated into the frontend because of time. Future developments are planned to fully integrate all the APIs and create additional ones that may be needed.  
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

## Project Management Tools Used
- JIRA (https://melkamuwoldemariam.atlassian.net/jira/software/projects/PC/boards/4?atlOrigin=eyJpIjoiZmE5MDdmMTlmNWNmNDA5OGJlM2EwYjlhNjhjNDRhYzUiLCJwIjoiaiJ9)

## Wireframing
- Figma (https://www.figma.com/design/1Ua77QBrzd4ws1pCf8jxhn/Local-Talent?node-id=0-1&t=jW26fzXYL3h6w32V-1)