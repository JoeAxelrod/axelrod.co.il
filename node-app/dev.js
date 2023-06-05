// Create a module
const myModule = {
    // Import the ChatOpenAI class from the langchain/chat_models/openai module
    ChatOpenAI: import("langchain/chat_models/openai"),
    initializeAgentExecutorWithOptions: import("langchain/agents"),
    RequestsGetTool: import("langchain/tools"),
    RequestsPostTool: import("langchain/tools"),
    AIPluginTool: import("langchain/tools"),
};

// Use the ChatOpenAI class
const ChatOpenAI = myModule.ChatOpenAI;
const initializeAgentExecutorWithOptions = new myModule.initializeAgentExecutorWithOptions;
const RequestsGetTool = myModule.RequestsGetTool;
const RequestsPostTool = myModule.RequestsPostTool;
const AIPluginTool = myModule.AIPluginTool;



const run = async () => {
    const tools = [
        new RequestsGetTool(),
        new RequestsPostTool(),
        await AIPluginTool.fromPluginUrl(
            // https://gpt-chess.atomic14.com/.well-known/ai-plugin.json
            // https://slack.com/.well-known/ai-plugin.json
            // https://gochitchat.ai/.well-known/ai-plugin.json
            "https://www.klarna.com/.well-known/ai-plugin.json"
        ),
    ];
    const agent = await initializeAgentExecutorWithOptions(
        tools,
        new ChatOpenAI({ temperature: 0 }),
        { agentType: "chat-zero-shot-react-description", verbose: true }
    );

    const result = await agent.call({
        input: "what t shirts are available in klarna?",
    });

    console.log({ result });
};