import { AIPluginTool, RequestsGetTool, RequestsPostTool } from "langchain/tools";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { Socket, ChatMsgData } from "./index";
import Chat, { UserType } from "./../models/Chat";



export const handleChatPlugin = async (socket: Socket, msgData: ChatMsgData): Promise<void> => {
    try {
        const tools = [
            new RequestsGetTool(),
            new RequestsPostTool(),
            await AIPluginTool.fromPluginUrl(msgData.pluginManifestUrl),
        ];

        const agent = await initializeAgentExecutorWithOptions(
            tools,
            new ChatOpenAI({temperature: 0}),
            {
                agentType: "chat-zero-shot-react-description",
                verbose: false,
            }
        );

        const result = await agent.call({
            input: msgData.message,
        });

        const res = {
            user_type: UserType.AI,
            message: result.output
        };

        socket.emit('chat message', res);

        await Chat.updateOrCreate(socket.user?._id, UserType.HUMAN, msgData.message);
        await Chat.updateOrCreate(socket.user?._id, UserType.AI, result.output);

    } catch (error) {
        console.error('Error saving chat:', error);
        socket.emit('chat message', error);
    }
}
