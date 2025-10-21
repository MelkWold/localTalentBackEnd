import express from "express";
import Reviews from "../models/reviewsSchema.mjs";
import auth from "../middleware/authenticateAuth.mjs"

// Set up
const reviewRouter = express.Router();

// ================================ Seed Route =======================================
// use this to seed: POST http://localhost:3000/api/reviews/seed
// import { reviews } from "../data/seedData.mjs";
// reviewRouter
// .route('/seed')
// .post(async (req, res) => {
//     try {
//         await Reviews.deleteMany();
//         await Reviews.insertMany(reviews);
//         console.log("Reviews added successfully");
//         res.status(201).send("Seed data successfully added");
//     } catch(error){
//         console.error(error.message);
//         res.status(500).send("Error seeding review data");
//     }
// })

// ================================ Create a new review =======================================
reviewRouter
  .route("/")
  .post(async (req, res) => {
    try {
      let newReview = await Reviews.create(req.body);
      res.status(201).json(newReview);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  })

  // Get all tasks
  .get(async (req, res) => {
    try {
      let allReviews = await Reviews.find({});
      res.json(allReviews);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  });
// ============= GET reviews by the logged-in user's ID ================
reviewRouter.get("/myreviews", auth, async (req,res) => {
  try {
    const reviews = await Reviews.find({ 
      $or: [{ reviewer: req.user.id }, { reviewee: req.user.id }],
     }).populate("customer provider", "userName email");
    res.json(reviews);
  } catch(err){
    res.status(500).json({ msg: err.message})
  }
});

  // GET all reviews for a specific user (reviewee)
reviewRouter
.route("/user/:id")
.get(async(req, res) => {
  try {
    const reviews = await Reviews.find({ reviewee: req.params.id})
    //populate reviewer userName
    .populate("reviewer", "userName"); 
    res.json(reviews);
  } catch(err){
    res.status(400).json({ msg: err.message });
  }
});


// ================================ GET, UPDATE, DELETE by id ===========================
reviewRouter
  .route("/:id")

  // GET a specific task
  .get(async (req, res) => {
    try {
      let review = await Reviews.findById(req.params.id);
      if (!review) {
        return res.status(404).json({ msg: "Review not found" });
      }
      return res.json(review);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  })

  // UPDATE a specific task's info
  .put(auth, async (req, res) => {
    try {
      let updatedReview = await Reviews.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      if (!updatedReview) {
        return res.status(404).json({ msg: "Review not found" });
      }
      return res.json(updatedReview);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  })

  // DELETE a specific task
  .delete(auth, async (req, res) => {
    try {
      let deletedReview = await Reviews.findByIdAndDelete(req.params.id);
      if (!deletedReview) {
        return res.status(404).json({ msg: "Review not found" });
      }
      return res.json({ msg: "Review successfully deleted." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  });

export default reviewRouter;
