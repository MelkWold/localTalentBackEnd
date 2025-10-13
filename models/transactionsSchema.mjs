import mongoose from "mongoose";
import Tasks from "./taskSchema.mjs";

const transactionsSchema = new mongoose.Schema(
  {
    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tasks",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    paymentMethod: {
      type: String,
      enum: ["Credit Card", "PayPal", "Cash"]
    },

    paymentStatus: {
      type: String,
      enum: ["Pending", "Completed", "Failed", "Refunded"],
      default: "Pending",
      },
  }, { timestamps: true }
);

// Create indices
transactionsSchema.index({ task: 1 });
transactionsSchema.index({ paymentStatus: 1 });

export default mongoose.model("Transactions", transactionsSchema);
