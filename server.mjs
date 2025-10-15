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
import messageRouter from "./routes/messagesRoute.mjs";
import cors from "cors";
import registerRoute from "./routes/registerRoute.mjs";
import loginRoute from "./routes/loginRoute.mjs";

// Set up
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;

// Database connection
databaseConnection();

// Middleware
app.use(express.json());
app.use(cors());
app.use(loggingMiddleware);


// Single endpoint to test API, Send data to browser
// app.get("/", (req,res) => res.send("API Running"))

// Routes
app.use('/api/users', userRouter);
app.use('/api/tasks', taskRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/transactions", transactionRouter);
app.use("/api/messages", messageRouter);

// Auth routes
app.use("/api/auth/login", loginRoute);
app.use("/api/auth/register", registerRoute);
// app.use('api/categories', categoriesRouter);


// Global Error Handling
app.use(globalErrorHandling);

// Listen to server
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
