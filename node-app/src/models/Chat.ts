import mongoose from "mongoose";
import { IUser } from "./User";

// Use the same interface name for the user that you used when defining the User model
interface IUserRef extends mongoose.Types.ObjectId {
    _id: IUser["_id"];
}

const ChatSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: true,
    },
    messages: [
        {
            author: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "User",
            },
            text: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                required: true,
            },
        },
    ],
});

const Chat = mongoose.model("Chat", ChatSchema);

// Create the "Chat" collection in MongoDB
Chat.collection.createIndex({
    user_id: 1,
    name: 1,
});

export default Chat;
