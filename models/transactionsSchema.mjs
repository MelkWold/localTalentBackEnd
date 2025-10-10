import mongoose from "mongoose";
import Tasks from "./taskSchema.mjs";
import Users from "./usersSchema.mjs";

const transactionsSchema = new mongoose.Schema({

    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tasks",
        required: true
    },
    amount: { 
        type: Number, 
        required:true,
        min: 0
     },
    
    paymentMethod: {
        type: String, 
        enum: ["Credit Card", "PayPal", "Cash"],
        status: {
            type: String,
            enum: ["Pending", "Completed", "Failed", "Refunded"],
            default: "Pending"
        }
    }, 

}, { timestamps: true });


// Create indices
transactionsSchema.index({ task: 1});
transactionsSchema.index({status: 1});

export default mongoose.model("Transactions", transactionsSchema);