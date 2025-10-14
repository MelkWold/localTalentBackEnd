import express from "express";
import Messages from "../models/messagesSchema.mjs";


// Set up
const messageRouter = express.Router();

// ================================ Seed Route =======================================
// import { messages } from "../data/seedData.mjs";
// use this to seed: POST http://localhost:3000/api/messages/seed
// messageRouter
// .route('/seed')
// .post(async (req, res) => {
//     try {
//         await Messages.deleteMany();
//         await Messages.insertMany(messages);
//         console.log("users added successfully");
//         res.status(201).send("Seed data successfully added");
//     } catch(error){
//         console.error(error.message);
//         res.status(500).send("Error seeding user data");
//     }
// })

// ================================ Create a new user =======================================
messageRouter
  .route("/")
  .post(async (req, res) => {
    try {
      let newMessage = await Messages.create(req.body);
      res.status(201).json(newMessage);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  })

  // Get all users
  .get(async (req, res) => {
    try {
      let allMessages = await Messages.find({});
      res.json(allMessages);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  });

// ================================ GET, UPDATE, DELETE by user id ===========================
messageRouter
  .route("/:id")

  // GET a specific user
  .get(async (req, res) => {
    try {
      let message = await Messages.findOne({ _id: req.params.id });
      if (!message) {
        return res.status(404).json({ msg: "user not found" });
      }
      return res.json(message);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  })

  // UPDATE a specific user's info
  .put(async (req, res) => {
    try {
      let updatedMessage = await Messages.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      if (!updatedMessage) {
        return res.status(404).json({ msg: "user not found" });
      }
      return res.json(updatedMessage);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  })

  // DELETE a specific user
  .delete(async (req, res) => {
    try {
      let deletedMessage = await Messages.findOneAndDelete({ _id: req.params.id });
      if (!deletedMessage) {
        return res.status(404).json({ msg: "user not found" });
      }
      return res.json({ msg: "user successfully deleted." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  });

export default messageRouter;
