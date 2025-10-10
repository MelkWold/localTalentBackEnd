import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: { type: String, required:true },
    email: { type: String, required:true, unique:true, lowercase: true, trim:true },
    password: { type: String, required:true, select: false },
    phone: { type: String, required:true, trim:true },
    userAddress: {
        city: {type: String, required:true, trim:true },
        county: {type: String, required:false, trim:true },
        state: {type: String, required:true, trim:true },
        zipcode: {type: String, required:true, trim:true },
        country: {type: String, required:true, trim:true },
    },
    services: {type: [String], required:true, validate: v => Array.isArray(v) && v.length > 0 },
    role: {
        type: String, 
        enum: ["Provider", "Customer"],
        required: true
    }

}, { timestamps: true });

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