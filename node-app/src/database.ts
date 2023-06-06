import mongoose from "mongoose";

export async function connectDB() {
    const connection = await mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`);
    console.log('Connected to MongoDB');
    return connection;
}
