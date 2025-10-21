import express from "express";
import Tasks from "../models/taskSchema.mjs";
import auth from "../middleware/authenticateAuth.mjs";

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

// ================================ Create and get all tasks =======================================
taskRouter
  .route("/")
  .post(auth, async (req, res) => {
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

// ============= GET tasks by the logged-in user's ID ================
taskRouter
.get("/mytasks", auth, async (req,res) => {
  try{
    const tasks = await Tasks.find({ 
      $or: [{ customer: req.user.id }, { provider: req.user.id }], }).populate("customer provider", "userName email");
    res.json(tasks);
  } catch(err){
    res.status(500).json({ msg: err.message})
  }
});

// ================================ GET, UPDATE, DELETE by task id ===========================
taskRouter
  .route("/:id")

  // GET a specific task
  .get(async (req, res) => {
    try {
      let task = await Tasks.findById(req.params.id);
      if (!task) {
        return res.status(404).json({ msg: "task not found" });
      }
      return res.json(task);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  })

  // UPDATE a specific task's info
  .put(auth, async (req, res) => {
    try {
      let updatedTask = await Tasks.findByIdAndUpdate(req.params.id, req.body, { new: true }
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
  .delete(auth, async (req, res) => {
    try {
      let deletedTask = await Tasks.findByIdAndDelete(req.params.id);
      if (!deletedTask) {
        return res.status(404).json({ msg: "task not found" });
      }
      return res.json({ msg: "task successfully deleted." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  });



export default taskRouter;
