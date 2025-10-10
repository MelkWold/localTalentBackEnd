import mongoose from 'mongoose';
import dotenv from 'dotenv';

// configure dotenv
dotenv.config();


// Get the connection string from env
const connectionString = process.env.mongoURL || "";


// Set up the MondoDB connection

async function databaseConnection() {

    try{
        await mongoose.connect(connectionString);
        console.log("MongoDB successfully connected ...")
    } catch(err){
        console.error(`Error: ${err.message}`);
        process.exit(1);

    }
}

export default databaseConnection;