import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    customerName: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required:true },
    amountPaid: { type: Number, required:true },
    service: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required:true}, // bring this from userSchema
    taskStatus: {
        type: String, 
        enum: ["In Progress", "Completed"],
        required: true,
        default: "Pending"
    },
    paymentStatus: {
        type: String, 
        enum: ["Pending", "Completed", "Other"],
        required: true,
        default: "Pending"
    }

});

// Create indices for fast quering
userSchema.index({amountPaid: 1});
userSchema.index({taskStatus: 1});
userSchema.index({service: 1});


export default mongoose.model("Tasks", taskSchema);