import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: { type: String, required:true },
    email: { type: String, required:true },
    password: { type: String, required:true },
    phone: { type: String, required:true },
    userAddress: {
        city: {type: String, required:true },
        county: {type: String, required:false },
        state: {type: String, required:true },
        zipcode: {type: String, required:true },
        country: {type: String, required:true },
    },
    services: {type: [String], required:true},
    role: {
        type: String, 
        enum: ["Provider", "Customer"],
        required: true
    }

});

// Create indices for fast quering
userSchema.index({services: 1});
userSchema.index({phone: 1});
userSchema.index({role: 1});
userSchema.index({
    "userAddress.city": 1,
    "userAddress.state": 1,
    "userAddress.country": 1
});


export default mongoose.model("Users", userSchema);