// import { ConnectOptions } from 'mongodb';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async ()=> {

    if (process.env.MONGO_URI) {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDb Connected'); 
    } else {
        throw new Error('MONGO_URI not set in environment variables');
    }
    
    console.log("Running on ENV: ", process.env.NODE_ENV);  
}

export default connectDB;