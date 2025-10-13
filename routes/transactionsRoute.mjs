import express from "express";
import Transactions from "../models/transactionsSchema.mjs";


// Set up
const transactionRouter = express.Router();

// ================================ Seed Route =======================================
// import { transactions } from "../data/seedData.mjs";
// // use this to seed: POST http://localhost:3000/api/users/seed
// transactionRouter
// .route('/seed')
// .post(async (req, res) => {
//     try {
//         await Transactions.deleteMany();
//         await Transactions.insertMany(transactions);
//         console.log("users added successfully");
//         res.status(201).send("Seed data successfully added");
//     } catch(error){
//         console.error(error.message);
//         res.status(500).send("Error seeding user data");
//     }
// });

// ================================ Create a new user =======================================
transactionRouter
  .route("/")
  .post(async (req, res) => {
    try {
      let newTransaction = await Transactions.create(req.body);
      res.status(201).json(newTransaction);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  })

  // Get all users
  .get(async (req, res) => {
    try {
      let allTransactions = await Transactions.find({});
      res.json(allTransactions);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  });

// ================================ GET, UPDATE, DELETE by user id ===========================
transactionRouter
  .route("/:id")

  // GET a specific user
  .get(async (req, res) => {
    try {
      let transaction = await Transactions.findOne({ _id: req.params.id });
      if (!transaction) {
        return res.status(404).json({ msg: "user not found" });
      }
      return res.json(transaction);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  })

  // UPDATE a specific user's info
  .put(async (req, res) => {
    try {
      let updatedTransaction = await Transactions.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      if (!updatedTransaction) {
        return res.status(404).json({ msg: "user not found" });
      }
      return res.json(updatedTransaction);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  })

  // DELETE a specific user
  .delete(async (req, res) => {
    try {
      let deletedTransaction = await Transactions.findOneAndDelete({ _id: req.params.id });
      if (!deletedTransaction) {
        return res.status(404).json({ msg: "user not found" });
      }
      return res.json({ msg: "user successfully deleted." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  });

export default transactionRouter;
