# Node-React AI Chat & Snake Game

<img src="repo-images%2FScreenshot-chat.png" alt="Screenshot-chat" width="500"/>

This project is an illustration of traditional web technologies harmoniously integrated with Artificial Intelligence. It consists of a Node.js application and a React.js application hosted in the same repository for an easy end-to-end view of the project.

The home page features a chat interface with a language model, integrated in two modes: Mode A allows a conversation with long-term memory using prompt engineering powered by [LangChain](https://js.langchain.com). Mode B dynamically integrates with chatGPT plugins.

A special feature of the project is the AI Snake Game, designed for learning AI by training the game with TensorFlow.js. Users can observe the network learning in real-time and modify various hyperparameters of the model for a more in-depth understanding of AI model development.

## Getting Started

### Prerequisites
- Make sure you have [Node.js](https://nodejs.org/en/download/) and [Docker](https://docs.docker.com/get-docker/) installed on your machine.
- Docker must be running.

### Clone the Repository
Clone the repository to your local machine:

```bash
git clone https://github.com/JoeAxelrod/node-react-AI
cd node-react-AI
```

## Project Structure

This project consists of two major parts:

1. Node Application (`node-app`): This is the backend of the project, built with TypeScript and Express.js. It communicates with the frontend using Socket.io and with a MongoDB database using Mongoose.

2. React Application (`react-app`): This is the frontend of the project, built with React.js. It communicates with the backend using Socket.io and renders the UI for the chat interface and the Snake Game.

Both the Node Application and the React Application have their own package.json files and dependencies. Please ensure that you install dependencies for both as mentioned in the 'Install Dependencies' section above.

## Using the Chat Interface

The chat interface is integrated with OpenAI's ChatGPT and LangChain for powerful and dynamic conversations.

To use the chat:

1. Enter your OpenAI API key and a ChatGPT Plugin manifest URL.
2. Use the chatbox to enter your prompts.
3. The AI will respond to your prompts dynamically, using the context of the entire conversation.


## The Snake AI Game

<img src="repo-images%2FScreenshot-snake.png" alt="Screenshot-snake" width="500"/>

The Snake AI Game uses TensorFlow.js to train a snake to play the game. It aims to provide an intuitive understanding of AI and neural networks.

The game allows you to:

1. Watch the network learn in real time.
2. Adjust the model's hyperparameters, such as the number of layers, the number of neurons, the error functions, the learning rate, and the level of randomness (exploration vs exploitation).

It typically takes about 60 games for the snake to learn. It's worth the wait!

## Contributing

This project is in its early phases and contributions are welcome. If you have ideas for improvements or notice any bugs, please open an issue. If you want to contribute to the code, please fork the repository and make a pull request.


For any other questions, please open an issue with the question and we'll do our best to answer it.



The server will start on http://localhost:3001.
The server will start on http://localhost:3000.

## Usage

1. Open a web browser and navigate to http://localhost:3000.
2. Start typing a message in the chat input box.
3. Press Enter to send the message.
4. The language model will generate a response.

## Features

* Supports two modes of conversation:
    * Mode A: Conversation with long-term memory, through prompt engineering using js.langchain.com.
    * Mode B: Dynamic use of chatGPT plugins.

## Technologies Used

This project utilizes a variety of technologies, including:

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [TensorFlow.js](https://www.tensorflow.org/js)
- [Socket.io](https://socket.io/)
- [Mongoose](https://mongoosejs.com/)
- Docker
- OpenAI GPT-3
- Yarn
- TypeScript


## Contact

If you have any questions or comments about this project, please feel free to contact me.

- GitHub: [@JoeAxelrod](https://github.com/JoeAxelrod)
- Website: [axelrod.co.il](https://axelrod.co.il)

## License

This project is licensed under the MIT License. See the LICENSE file for more details.



