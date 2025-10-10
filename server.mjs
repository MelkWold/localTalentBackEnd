// Import modules and tools needed 
import express from 'express';
import dotenv from 'dotenv';
import databaseConnection from "./db/connection.mjs"


// Set up
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;


// Database connection
databaseConnection()

// Middleware
app.use(express.json())
// app.use(globalErrorHandling)

// Routes
// app.use('api/users', usersRouter);
// app.use('api/categories', categoriesRouter);
// app.use('api/users', usersRouter);
// app.use('api/users', usersRouter);



// Listen to server

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})