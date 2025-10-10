import mongoose from "mongoose";
// import Tasks from "./"
// import Users from "./"

const reviewsSchema = new mongoose.Schema({

    customerName: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Users",
        required:true }, // Is it better to bring this from Users or Tasks?
    providerName: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Users",
        required:true }, // Is it better to bring this from Users or Tasks?
    service: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Tasks",
        required:true}, // Is it better to bring this from Users or Tasks?
    reviewProvider: { type: string, required:true }, // What'd be the best way to do this?
    reviewCustomer: { type: string, required:true } // What'd be the best way to do this?


});


// Create indices
transactionsSchema.index({reviewProvider: 1});
transactionsSchema.index({reviewCustomer: 1});

export default mongoose.model("Reviews", reviewsSchema);