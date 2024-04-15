import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export default async function Connection(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to mongodb database")

        
    } catch (error) {
        console.log(error);
        
    }
}