import { Server } from 'socket.io';
import {AIPluginTool, RequestsGetTool, RequestsPostTool} from "langchain/tools";
import {initializeAgentExecutorWithOptions} from "langchain/agents";
import {ChatOpenAI} from "langchain/chat_models/openai";
import  Chat  from "./../models/Chat";
import {Socket} from "./index";




export const handleChatMessage = async (io: Server, socket: Socket): Promise<void> => {
    socket.on('chat message', async (msg: string): Promise<void> => {
        console.log('Message: ' + msg);
        // Broadcast the chat message to all connected users


        const tools = [
            new RequestsGetTool(),
            new RequestsPostTool(),
            await AIPluginTool.fromPluginUrl(
                "https://slack.com/.well-known/ai-plugin.json"
                // "https://www.klarna.com/.well-known/ai-plugin.json"
            ),
        ];
        const agent = await initializeAgentExecutorWithOptions(
            tools,
            new ChatOpenAI({temperature: 0}),
            {
                // agentType: "chat-conversational-react-description",
                agentType: "chat-zero-shot-react-description",
                verbose: false,
                // memory
            }
        );


        const result = await agent.call({
            input: msg,
        });

        socket.emit('chat message', result.output);

        const chat = await Chat.create({
            user_id: socket.user?._id,
            name: "Chat name",
            messages: [{
                author: socket.id,
                text: result.output,
                createdAt: new Date()
            }],
        });


        console.log('Chat saved: ', chat);
    });
}
