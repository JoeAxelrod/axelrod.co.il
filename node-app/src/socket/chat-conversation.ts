import { OpenAI } from "langchain/llms/openai";
import { ConversationChain } from "langchain/chains";
import { AIChatMessage, HumanChatMessage } from "langchain/schema";
import { BufferMemory, ChatMessageHistory } from "langchain/memory";
import { Socket, ChatMsgData } from "./index";
import Chat, { UserType } from "./../models/Chat";

interface ChatHistory {
    user_id: string;
    messages: {
        user_type: UserType;
        text: string;
    }[];
}

export const handleChatConversation = async (socket: Socket, msgData: ChatMsgData): Promise<void> => {
    try {
        const memoryMessages: ChatHistory | null = await Chat.findOne({user_id: socket.user?._id});

        const pastMessages = memoryMessages?.messages.map((message) => {
            return message.user_type === UserType.HUMAN
                ? new HumanChatMessage(message.text)
                : new AIChatMessage(message.text);
        }) || [];

        const memory = new BufferMemory({chatHistory: new ChatMessageHistory(pastMessages)});
        const model = new OpenAI({});
        const chain = new ConversationChain({llm: model, memory: memory});

        const aiRes = await chain.call({input: msgData.message});

        const res = {
            user_type: UserType.AI,
            message: aiRes.response,
        };

        socket.emit('chat message', res);

        await Chat.updateOrCreate(socket.user?._id, UserType.HUMAN, msgData.message);
        await Chat.updateOrCreate(socket.user?._id, UserType.AI, aiRes.response);

    } catch (error) {
        console.error('Error saving chat:', error);
        socket.emit('chat message', error);
    }
};
