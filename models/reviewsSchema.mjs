import mongoose from "mongoose";
import Users from "./usersSchema.mjs";

const reviewsSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    comment: {
      type: String,
      maxlength: 500,
    },
    reviewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    reviewee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
  },
  { timestamps: true }
);

// Create indices
reviewsSchema.index({ reviewer: 1 });
reviewsSchema.index({ reviewee: 1 });

export default mongoose.model("Reviews", reviewsSchema);
