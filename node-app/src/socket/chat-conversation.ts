import { Socket, Server } from 'socket.io';
import dotenv from 'dotenv';
import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import { ChatMessageHistory } from "langchain/memory";
import { HumanChatMessage, AIChatMessage } from "langchain/schema";


dotenv.config();

export const handleChatMessage = async (io: Server, socket: Socket): Promise<void> => {
    socket.on('chat message', async (msg: string): Promise<void> => {
        console.log('Message: ' + msg);
        // Broadcast the chat message to all connected users


        const model = new OpenAI({});
        const pastMessages = [
            new HumanChatMessage("My name's Jonas"),
            new AIChatMessage("Nice to meet you, Jonas!"),
        ];

        const memory = new BufferMemory({
            chatHistory: new ChatMessageHistory(pastMessages),
            memoryKey: "chat_history",
        });
        const chain = new ConversationChain({ llm: model, memory: memory });



        // const res1 = await chain.call({ input: "Hi! I'm Jim." });
        // console.log({ res1 });

        // const res2 = await chain.call({ input: "What's my name?" });
        // console.log(res2.response);


    });
}
