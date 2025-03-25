import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

function connectDB() {
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log(error);
    });
}

export default connectDB;