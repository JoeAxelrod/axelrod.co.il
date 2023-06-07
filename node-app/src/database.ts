import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect('mongodb://localhost/test');
        console.log("Connected to MongoDB");
        return connection;
    } catch (err) {
        console.error(err);
    }
};
