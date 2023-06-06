# AI Snake Game Learning Platform

This project provides a web-based platform to learn AI by training a Snake game with TensorFlow.js. It uses an Express.js server with TypeScript and MongoDB for backend operations.

## Installation Guide

Follow these steps to get the project running on your local machine:

### Prerequisites
- Make sure you have [Node.js](https://nodejs.org/en/download/) and [Docker](https://docs.docker.com/get-docker/) installed on your machine.
- Make sure Docker is running.

### Clone the Repository
First, clone the repository to your local machine:


```bash
git clone https://github.com/JoeAxelrod/node-react-AI
cd node-react-AI
```


react node 16


### Install Dependencies
Run the following command to install the necessary dependencies:

```bash
cd  react-app
yarn install 

cd node-app
yarn install
```

### Run MongoDB as a Docker container
Pull the latest MongoDB image:

```bash
docker pull mongo
```

Start a MongoDB container:

```bash
docker run --name some-mongo -p 27017:27017 -d mongo
```

