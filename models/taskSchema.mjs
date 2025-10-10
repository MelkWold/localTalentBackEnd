import mongoose from 'mongoose';
import Users from "./usersSchema.mjs";


const taskSchema = new mongoose.Schema({
    customer: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Users",
        required:true },
    provider: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Users",
        required:true
    },
    amountPaid: { type: Number, required:true, min:0 },
    service: {
        type: String, 
        required:true,
        trim: true
    },
    taskStatus: {
        type: String, 
        enum: ["In Progress", "Pending", "Completed"],
        required: true,
        default: "Pending"
    },
    paymentStatus: {
        type: String, 
        enum: ["Pending", "Completed", "Failed"],
        required: true,
        default: "Pending"
    }

}, { timestamps: true });

// Create indices for fast quering
taskSchema.index({customer: 1});
taskSchema.index({provider: 1});
taskSchema.index({amountPaid: 1});
taskSchema.index({taskStatus: 1});
taskSchema.index({service: 1});
taskSchema.index({paymentStatus: 1});


export default mongoose.model("Tasks", taskSchema);