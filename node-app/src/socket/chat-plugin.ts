import { Server } from 'socket.io';
import {AIPluginTool, RequestsGetTool, RequestsPostTool} from "langchain/tools";
import {initializeAgentExecutorWithOptions} from "langchain/agents";
import {ChatOpenAI} from "langchain/chat_models/openai";
import Chat, { UserType } from "./../models/Chat";
import {Socket} from "./index";
import {OpenAI} from "langchain/llms/openai";
import {AIChatMessage, HumanChatMessage} from "langchain/schema";
import {BufferMemory, ChatMessageHistory} from "langchain/memory";
import {ConversationChain} from "langchain/chains";


export const handleChatMessage = async (io: Server, socket: Socket): Promise<void> => {
    socket.on('chat message', async (msgData: any): Promise<void> => {

        if (msgData.isPluginMode) {
            try {
                const tools = [
                    new RequestsGetTool(),
                    new RequestsPostTool(),
                    await AIPluginTool.fromPluginUrl(
                        // "https://slack.com/.well-known/ai-plugin.json" // example plugin manifest URL
                        // "https://www.klarna.com/.well-known/ai-plugin.json" // example plugin manifest URL
                        msgData.pluginManifestUrl
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
                    input: msgData.message,
                });

                const res = {
                    user_type: UserType.AI,
                    message: result.output
                }
                socket.emit('chat message', res);

                await Chat.updateOrCreate(socket.user?._id, UserType.HUMAN, msgData.message);
                await Chat.updateOrCreate(socket.user?._id, UserType.AI, result.output);

            } catch (error) {
                console.error('Error saving chat:', error);
                socket.emit('chat message', error);
            }
        }
        else {
            try {
                const memoryMessages = await Chat.findOne({
                    user_id: socket.user?._id,
                });

                const pastMessages = memoryMessages?.messages.map((message: any) => {
                    if (message.user_type === UserType.HUMAN) {
                        return new HumanChatMessage(message.text)
                    } else {
                        return new AIChatMessage(message.text)
                    }
                }) || [];

                const memory = new BufferMemory({
                    chatHistory: new ChatMessageHistory(pastMessages),
                });

                const model = new OpenAI({});
                const chain = new ConversationChain({ llm: model, memory: memory });
                const aiRes = await chain.call({ input: msgData.message });

                const res = {
                    user_type: UserType.AI,
                    message: aiRes.response
                }

                socket.emit('chat message', res);

                await Chat.updateOrCreate(socket.user?._id, UserType.HUMAN, msgData.message);
                await Chat.updateOrCreate(socket.user?._id, UserType.AI, aiRes.response);

            } catch (error) {
                console.error('Error saving chat:', error);
                socket.emit('chat message', error);
            }
        }
    });
}
