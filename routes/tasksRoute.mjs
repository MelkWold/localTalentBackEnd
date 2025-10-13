import express from "express";
import Tasks from "../models/taskSchema.mjs";


// Set up
const taskRouter = express.Router();

// ================================ Seed Route =======================================
// use this to seed: POST http://localhost:3000/api/tasks/seed
// import { tasks } from "../data/seedData.mjs";
// taskRouter
// .route('/seed')
// .post(async (req, res) => {
//     try {
//         await Tasks.deleteMany();
//         await Tasks.insertMany(tasks);
//         console.log("tasks added successfully");
//         res.status(201).send("Seed data successfully added");
//     } catch(error){
//         console.error(error.message);
//         res.status(500).send("Error seeding task data");
//     }
// })

// ================================ Create a new task =======================================
taskRouter
  .route("/")
  .post(async (req, res) => {
    try {
      let newTask = await Tasks.create(req.body);
      res.status(201).json(newTask);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  })

  // Get all tasks
  .get(async (req, res) => {
    try {
      let allTasks = await Tasks.find({});
      res.json(allTasks);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  });

// ================================ GET, UPDATE, DELETE by task id ===========================
taskRouter
  .route("/:id")

  // GET a specific task
  .get(async (req, res) => {
    try {
      let task = await Tasks.findOne({ _id: req.params.id });
      if (!task) {
        return res.status(404).json({ msg: "task not found" });
      }
      return res.json(task);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  })

  // UPDATE a specific task's info
  .put(async (req, res) => {
    try {
      let updatedTask = await Tasks.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      if (!updatedTask) {
        return res.status(404).json({ msg: "task not found" });
      }
      return res.json(updatedTask);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  })

  // DELETE a specific task
  .delete(async (req, res) => {
    try {
      let deletedTask = await Tasks.findOneAndDelete({ _id: req.params.id });
      if (!deletedTask) {
        return res.status(404).json({ msg: "task not found" });
      }
      return res.json({ msg: "task successfully deleted." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  });

export default taskRouter;
