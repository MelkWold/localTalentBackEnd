// Import modules and tools needed
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./db/connection.mjs";
import globalErrorHandling from "./middleware/globalErrorHandling.mjs";
import taskRouter from "./routes/tasksRoute.mjs";
import userRouter from "./routes/usersRoute.mjs";
import reviewRouter from "./routes/reviewsRoute.mjs";

// Set up
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;

// Database connection
databaseConnection();

// Middleware
app.use(express.json());
app.use(globalErrorHandling);

// Routes
app.use("/api/reviews", reviewRouter);
// app.use('api/categories', categoriesRouter);
// app.use('api/tasks', tasksRouter);
// app.use('api/tasks', tasksRouter);
// app.use('/', taskRouter)

// Listen to server

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
