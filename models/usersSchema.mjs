import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true, select: false },
    phone: { type: String, required: false, trim: true },
    userAddress: {
      city: { type: String, required: false, trim: true },
      county: { type: String, required: false, trim: true },
      state: { type: String, required: false, trim: true },
      zipcode: { type: String, required: false, trim: true },
      country: { type: String, required: false, trim: true },
    },
    services: {
      type: [String],
      required: false,
      validate: {
        validator: (v) => {
        if(v === undefined || v === null || v.length === 0) return true; // i.e. if the above conditions are true, just validate as true
          return Array.isArray(v);
      },
      message: "Services must be a non-empty array of strings if provided" 
      }, },

    role: {
      type: String,
      enum: ["Provider", "Customer"],
      required: true,
    }, 
    
  },  { timestamps: true }
);

// Create indices for fast quering
usersSchema.index({ services: 1 });
usersSchema.index({ phone: 1 });
usersSchema.index({ role: 1 });
usersSchema.index({
  "userAddress.city": 1,
  "userAddress.state": 1,
  "userAddress.country": 1,
});

export default mongoose.model("Users", usersSchema);
