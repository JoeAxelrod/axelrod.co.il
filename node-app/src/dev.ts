
import dotenv from 'dotenv';
dotenv.config();
import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import { ChatMessageHistory } from "langchain/memory";
import { HumanChatMessage, AIChatMessage } from "langchain/schema";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import {
    RequestsGetTool,
    RequestsPostTool,
    AIPluginTool,
} from "langchain/tools";



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

(async () => {

/*        const tools = [
            new RequestsGetTool(),
            new RequestsPostTool(),
            await AIPluginTool.fromPluginUrl(
                "https://www.klarna.com/.well-known/ai-plugin.json"
            ),
        ];
        const agent = await initializeAgentExecutorWithOptions(
            tools,
            new ChatOpenAI({ temperature: 0 }),
            { agentType: "chat-zero-shot-react-description", verbose: false }
        );

        const result = await agent.call({
            input: "what t shirts are available in klarna?",
        });

        console.log({ result });*/


    const tools = [
        new RequestsGetTool(),
        new RequestsPostTool(),
        await AIPluginTool.fromPluginUrl(
            "https://www.klarna.com/.well-known/ai-plugin.json"
        ),
    ];
    const agent = await initializeAgentExecutorWithOptions(
        tools,
        new ChatOpenAI({ temperature: 0 }),
        {
            agentType: "chat-conversational-react-description",
            // agentType: "chat-zero-shot-react-description",
            verbose: false,
            // memory
        }
    );


    const result = await agent.call({
        input: "what t shirts are available in klarna?",
    });

    console.log( result.output);
})()

