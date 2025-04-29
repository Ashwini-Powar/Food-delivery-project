import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://GreatStack:123Great@cluster0.voiquza.mongodb.net/food-del').then(()=>console.log("DB CONNECTED"));
}