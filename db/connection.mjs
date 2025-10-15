import mongoose from 'mongoose';
import dotenv from 'dotenv';

// configure dotenv
dotenv.config();


// Get the connection string from env
const connectionString = process.env.mongoURL || "";

// Check if the env variable isn't missing
if (!connectionString) {
    console.error("MongoDB Connection string missing in .env file");
    process.exit(1); 
}

// Set up the MongoDB connection

async function databaseConnection() {

    try {
        await mongoose.connect(connectionString);
        console.log("MongoDB successfully connected ...")
    } catch(err){
        console.error(`Error: ${err.message}`);
        process.exit(1);

    }
}

export default databaseConnection;