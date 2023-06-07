import mongoose, { Document, Schema, Model } from "mongoose";
import { IUser } from "./User";

export enum UserType {
    AI = "ai",
    HUMAN = "human"
}

export interface IMessage extends Document {
    text: string;
    user_type: UserType;
    createdAt: Date;
}

export interface IUserRef extends Document {
    _id: IUser["_id"];
}

interface IChat extends Document {
    user_id: IUserRef;
    messages: IMessage[];
}

interface IChatModel extends Model<IChat> {
    updateOrCreate(user_id: IUserRef, user_type: UserType, text: string): Promise<IChat>;
}

const ChatSchema: Schema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    messages: [
        {
            text: {
                type: String,
                required: true,
            },
            user_type: {
                type: String,
                required: true,
                enum: Object.values(UserType)
            },
            createdAt: {
                type: Date,
                required: true,
            },
        },
    ],
});

ChatSchema.statics.updateOrCreate = async function(user_id: IUserRef, user_type: UserType, text: string): Promise<IChat> {
    let chat = await this.findOne({ user_id: user_id }) as IChat;

    if (chat) {
        // If chat exists for the user, push new message
        chat.messages.push(<IMessage>{
            text: text,
            user_type: user_type,
            createdAt: new Date(),
        });
    } else {
        // If no chat exists, create a new chat for the user
        chat = new this({
            user_id: user_id,
            messages: [{
                text: text,
                user_type: user_type,
                createdAt: new Date(),
            }],
        }) as IChat;
    }

    return chat.save();
}

const Chat: IChatModel = mongoose.model<IChat, IChatModel>("Chat", ChatSchema);

// Create the "Chat" collection in MongoDB
Chat.collection.createIndex({
    user_id: 1
});

export default Chat;
