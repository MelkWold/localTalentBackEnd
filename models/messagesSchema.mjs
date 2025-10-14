import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    messageText: { type: String, required: true },
    isRead: { type: Boolean, default: false }
  },
  { timestamps: true }
);

// Create indices for fast quering
messagesSchema.index({ sender: 1, receiever: 1, createdAt: -1 });

export default mongoose.model("Messages", messagesSchema);
