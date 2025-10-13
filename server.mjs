// Import modules and tools needed
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./db/connection.mjs";
import globalErrorHandling from "./middleware/globalErrorHandling.mjs";
import taskRouter from "./routes/tasksRoute.mjs";
import userRouter from "./routes/usersRoute.mjs";
import reviewRouter from "./routes/reviewsRoute.mjs";
import loggingMiddleware from "./middleware/loggingMiddleware.mjs";
import transactionRouter from "./routes/transactionsRoute.mjs";

// Set up
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;

// Database connection
databaseConnection();

// Middleware
app.use(express.json());
app.use(globalErrorHandling);
app.use(loggingMiddleware)

// Routes
app.use('/api/users', userRouter);
app.use('/api/tasks', taskRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/transactions", transactionRouter);
// app.use('api/categories', categoriesRouter);


// Listen to server

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
