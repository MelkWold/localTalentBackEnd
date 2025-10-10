import mongoose from "mongoose";
// import Tasks from "./"
// import Users from "./"

const transactionsSchema = new mongoose.Schema({

    customerName: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Users",
        required:true }, // Is it better to bring this from Users or Tasks?
    providerName: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Users",
        required:true }, // Is it better to bring this from Users or Tasks?
    amountPaid: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Tasks",
        required:true },
    service: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Tasks",
        required:true}, // Is it better to bring this from Users or Tasks?
    paymentStatus: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Tasks",
        required:true
    }

});


// Create indices
transactionsSchema.index({service: 1});
transactionsSchema.index({paymentStatus: 1});

export default mongoose.model("Transactions", transactionsSchema);