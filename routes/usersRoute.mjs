import express from "express";
import Users from "../models/usersSchema.mjs";


// Set up
const userRouter = express.Router();

// ================================ Seed Route =======================================
// import { users } from "../data/seedData.mjs";
//use this to seed: POST http://localhost:3000/api/users/seed
// userRouter
// .route('/seed')
// .post(async (req, res) => {
//     try {
//         await Users.deleteMany();
//         await Users.insertMany(users);
//         console.log("users added successfully");
//         res.status(201).send("Seed data successfully added");
//     } catch(error){
//         console.error(error.message);
//         res.status(500).send("Error seeding user data");
//     }
// })

// ================================ Create a new user =======================================
userRouter
  .route("/")
  .post(async (req, res) => {
    try {
      let newUser = await Users.create(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  })

  // Get all users
  .get(async (req, res) => {
    try {
      let allUsers = await Users.find({});
      res.json(allUsers);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  });

// ================================ GET, UPDATE, DELETE by user id ===========================
userRouter
  .route("/:id")

  // GET a specific user
  .get(async (req, res) => {
    try {
      let user = await Users.findOne({ _id: req.params.id });
      if (!user) {
        return res.status(404).json({ msg: "user not found" });
      }
      return res.json(user);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  })

  // UPDATE a specific user's info
  .put(async (req, res) => {
    try {
      let updatedUser = await Users.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ msg: "user not found" });
      }
      return res.json(updatedUser);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  })

  // DELETE a specific user
  .delete(async (req, res) => {
    try {
      let deletedUser = await Users.findOneAndDelete({ _id: req.params.id });
      if (!deletedUser) {
        return res.status(404).json({ msg: "user not found" });
      }
      return res.json({ msg: "user successfully deleted." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  });

export default userRouter;
