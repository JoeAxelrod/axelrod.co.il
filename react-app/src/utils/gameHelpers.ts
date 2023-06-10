/*
  Warning Warning Warning!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  This is a rough draft.
  Please don't judge the code. 😁
*/

import * as tf from '@tensorflow/tfjs';

let isTraining = false;
let steps: any[] = [];
let apples = 0;
let bestReward = 0;
let snake = [{ top: 3, left: 3 }]; // Snake starts in the middle of our 10x10 grid
let apple = { top: 7, left: 7 }; // Apple starts at the bottom right
let epsilon = 0.003;
let predictDirection: string;
const learningRate = 0.0001;

let games = 0;
const gamma = 0.9;  // discount factor for future rewards

const stateLength = 10;
let previousSnakeHeadPosition: any[] | null = null; // Initialize this wherever the game starts
let newDistanceToFood: string | number | null = null;
let prevDistanceToFood: string | number | null = null;

// Possible directions for the snake to move
const directions  = ['top', 'bottom', 'left', 'right'];


const model: tf.Sequential = tf.sequential();
model.add(tf.layers.dense({units: 256, activation: 'relu', inputShape: [stateLength]}));

model.add(tf.layers.dense({units: 256, activation: 'relu', inputShape: [stateLength]}));

model.add(tf.layers.dense({units: 256, activation: 'relu'}));

model.add(tf.layers.dense({units: 4, activation: 'linear'}));


const optimizer = tf.train.adam(learningRate);
model.compile({optimizer: /*"adam"*/ optimizer, loss: 'meanSquaredError'});

let reward = 0;


export async function moveSnake(): Promise<{
    reward: number;
    apple: { top: number; left: number };
    loss: string[];
    snake: { top: number; left: number }[];
    games: number;
    bestReward: number;
    predictDirection: string;
    randomness: string
}> {
    const oldState = getState({
        mode: "predict",
        lastMove: steps[steps.length - 1],
    });

    let oldStateTensor = await tf.tensor2d(oldState, [1, stateLength]);

    // Add randomness to encourage exploration
    let direction;
    if (Math.random() < 0.3 - games * epsilon) {  // 30% of the time, move randomly
        direction = Math.floor(Math.random() * 4); // randomly choose a direction
    } else { // 70% of the time, use the model's prediction
        const predictionArray = await tf.argMax((model.predict(oldStateTensor) as tf.Tensor), 1).array() as number[];
        direction = predictionArray[0];
    }


    predictDirection = directions[direction];
    steps.push(predictDirection);
    reward = await performAction(predictDirection);

    const newState = getState({
        mode: "fit",
        lastMove: steps[steps.length - 1]
    });

    let newStateTensor = await tf.tensor2d(newState, [1, stateLength]);

    // let oldQs = (await (model.predict(oldStateTensor) as tf.Tensor).array()) as number[];
    let newQs = (await (model.predict(newStateTensor) as tf.Tensor).array()) as number[];

    (newQs[0] as unknown as number[])[direction] = reward + gamma * Math.max(...(newQs[0] as unknown as number[]));

    let fitResult;
    if (!isTraining) {
        console.log("fitting...")
        isTraining = true;
        try {
            fitResult = await model.fit(oldStateTensor, await tf.tensor2d(newQs, [1, 4]), {
                epochs: 5,
                verbose: 0
            });
        } finally {
            isTraining = false;
        }
    }
    let loss: string[] = [];

    if (fitResult && fitResult.history && fitResult.history.loss) {
        const lossArray = fitResult.history.loss;
        loss = lossArray ? lossArray.map((it) => (typeof it === 'number' ? it.toFixed(3) : '')) : [];
    }


    prevDistanceToFood = newDistanceToFood;

    if (reward < -1) {
        if (bestReward < apples) {
            bestReward = apples;
        }
        newGame();
    }


    return {
        predictDirection,
        snake,
        apple,
        games,
        randomness: (0.3 - games * epsilon).toFixed(2),
        bestReward,
        reward,
        loss
    };
}

async function performAction(direction: string) {
    const head = {...snake[0]}; // copy head

    switch (direction) {
        case 'top':
            head.top--;
            break;
        case 'bottom':
            head.top++;
            break;
        case 'left':
            head.left--;
            break;
        case 'right':
            head.left++;
            break;
    }


    if (snake.length > 1 && head.top === snake[1].top && head.left === snake[1].left) {
        // reverse direction is not allowed
        // direction: top, ai move: bottom
        // snake: [ { top: 5, left: 5 }, { top: 4, left: 5 }]
        // head:  { top: 4, left: 5 }

        return -40;
    }

    snake.unshift(head); // add new head to snake

    // If the snake hits the boundary or itself, it's game over and the reward is -1
    if (isOutOfBounds(head)) {
        return -10;
    }

    if (isOnSnake(head)) {
        return -25;
    }


    // If the snake eats an apple, the reward is 1
    if (head.top === apple.top && head.left === apple.left) {
        apples++;
        generateNewApplePosition();
        return 20;
    }

    snake.pop(); // remove tail

    newDistanceToFood = getManhattanDistanceToFood();

    // If the snake moves farther to the apple and has no tail, the reward is -1
    if (prevDistanceToFood && snake.length === 1) {
        if (prevDistanceToFood
            <
            newDistanceToFood
        ) {
            return -1;
        }
        return 1;
    }

    // Otherwise, the snake moves normally and the reward is 0
    return 0;
}

function getState({
                      mode = "predict",
                      lastMove = null
                  }) {
    const foodDir = getFoodDir();

    // Get the new danger direction after the action is performed
    const dangerDir = getDangerDir();

    const currentPos = [snake[0].top, snake[0].left];

    let direction;
    // Calculate direction as the difference between the current and previous position
    //  [1,  0]: bottom
    //  [-1, 0]: top
    //  [0,  1]: right
    //  [0, -1]: left.
    direction = [
        currentPos[0] -  ((previousSnakeHeadPosition || [])[0] || 0),
        currentPos[1] - ((previousSnakeHeadPosition || [])[1] || 0)
    ];
    if (mode === "predict") {
        previousSnakeHeadPosition = currentPos; // Update the previous position
    }

    // The new state of the game
    return [directions.findIndex(it => it === lastMove), snake.length > 0 ? 1 : 0, ...direction, ...dangerDir, ...foodDir];
}


function generateNewApplePosition(): any {
    apple.top = Math.floor(Math.random() * 10);
    apple.left = Math.floor(Math.random() * 10);

    // Check if apple position overlaps with the snake position
    for(let i = 0; i < snake.length; i++) {
        if(snake[i].top === apple.top && snake[i].left === apple.left) {
            // If there's overlap, generate new apple position again
            return generateNewApplePosition();
        }
    }
}


function getDangerDir() {
    const directions = ['up', 'down', 'left', 'right'];
    return directions.map(dir => isDanger(getNextPosition(dir)) ? 1 : 0);
}


function getNextPosition(direction: string) {
    // Get the current position of the snake's head
    const currentPos = {
        top: snake[0].top,
        left: snake[0].left
    };

    // Calculate the next position based on the current direction
    switch(direction) {
        case 'up':
            currentPos.top -= 1;
            break;
        case 'down':
            currentPos.top += 1;
            break;
        case 'left':
            currentPos.left -= 1;
            break;
        case 'right':
            currentPos.left += 1;
            break;
        default:
        // Stay still if the direction is unknown
    }

    return currentPos;
}


function isDanger(position: { top: number; left: number; }) {
    // Check if the given position is out of bounds or overlaps with the snake.
    return isOutOfBounds(position) || isOnSnake(position);
}

function isOutOfBounds(position: { top: any; left: any; }) {
    return position.top < 0 || position.top >= 10 || position.left < 0 || position.left >= 10;
}

function isOnSnake(position: { top: any; left: any; }) {
    /* return snake.some((segment, index) => {
         if (excludeHead && index === 0) return false;
         return segment.top === position.top && segment.left === position.left;
     });*/


    for (let i = 0; i < snake.length; i++) {
        if (i === 0) continue;
        if (position.top === snake[i].top && position.left === snake[i].left) {
            return true;
        }
    }
    return false;
}


function getFoodDir() {
    // Calculate the difference in the x and y coordinates
    // between the apple and the snake's head.
    // If the result is negative, the apple is to the left (for x) or up (for y).
    // If the result is positive, the apple is to the right (for x) or down (for y).
    const directionToFood = {
        top: apple.top - snake[0].top,
        left: apple.left - snake[0].left
    };

    // console.log("x:", directionToFood.left < 0 ? "left" : directionToFood.left > 0 ? "right" : "vertical")
    // console.log("y:", directionToFood.top < 0 ? "above" : directionToFood.top > 0 ? "below" : "horizontal")
    return [
        // For the x direction:
        // If the apple is to the left, return -1.
        // If the apple is to the right, return 1.
        // If the apple is on the same vertical line as the snake's head, return 0.
        directionToFood.left < 0 ? -1 : directionToFood.left > 0 ? 1 : 0,

        // For the y direction:
        // If the apple is above, return -1.
        // If the apple is below, return 1.
        // If the apple is on the same horizontal line as the snake's head, return 0.
        directionToFood.top < 0 ? -1 : directionToFood.top > 0 ? 1 : 0
    ];
}


function getManhattanDistanceToFood() {
    const dx = Math.abs(apple.left - snake[0].left);
    const dy = Math.abs(apple.top - snake[0].top);
    return dx + dy;
}

export function newGame() {
    games++;
    apples = 0;
    steps = [];
    snake = [{ top: 4, left: 4 }]; // Snake starts in the middle of our 10x10 grid
    apple = { top: 7, left: 7 }; // Apple starts at the bottom right

    return {
        snake,
        apple
    }
}



