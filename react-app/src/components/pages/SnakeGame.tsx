import React, { useState, useEffect, useRef } from 'react';
import {Box, Container, Typography} from '@mui/material';
import { newGame, moveSnake } from '../../utils/gameHelpers';


interface CellProps {
    isSnakeHead: boolean;
    isSnakeBody: boolean;
    isApple: boolean;
}

const Cell: React.FC<CellProps> = ({ isSnakeHead, isSnakeBody, isApple }) => {
    return (
        <Box
            sx={{
                width: 24,
                height: 24,
            }}
        >
            <Typography fontSize={20}>
                {isApple ? "🍎" : ""}
                {isSnakeHead ? "🤩" : ""}
                {isSnakeBody ? "🦠" : ""}
            </Typography>

        </Box>
    );
};
const SnakeGame: React.FC = () => {
    const oneTimeRef = useRef(false);
    const [board, setBoard] = useState(Array.from({ length: 10 }, () => Array(10).fill(null)));
    const [stepData, setStepData] = useState<any>({});

    useEffect(() => {
        if (oneTimeRef.current) {
            return;
        }
        oneTimeRef.current = true;

        const calculateNewBoard = async () => {
            const newBoard = Array.from({ length: 10 }, () => Array(10).fill(null));
            const {
                snake,
                apple,
                games,
                randomness,
                bestReward,
                reward,
                loss
            } = await moveSnake();

            setStepData({
                games,
                randomness,
                bestReward,
                reward,
                loss
            })
            for (const snakeCell of snake) {
                const isHead = snakeCell === snake[0];
                if (
                    snakeCell.top >= 0 &&
                    snakeCell.top < newBoard.length &&
                    snakeCell.left >= 0 &&
                    snakeCell.left < newBoard[0].length
                ) {
                    newBoard[snakeCell.top][snakeCell.left] = isHead ? "snakeHead" : "snakeBody";
                }
            }
            newBoard[apple.top][apple.left] = "apple";
            return newBoard;
        }

        newGame();

        setInterval(async () => {
            const newBoard = await calculateNewBoard();
            setBoard(newBoard);
        }, 200);
    }, []);

    return (
        <Container>
            <Typography variant="h6" gutterBottom mt={2} mb={1} style={{ textAlign: 'center' }}>
                Welcome to the snake AI project!
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ fontSize: '12px'}}>
                This project was built to make learning AI and training neural networks more intuitive.
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ fontSize: '12px'}}>
                The goal is to create an interactive interface to learn through experience.
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ fontSize: '12px'}}>
                This is phase 1 of the project, where you can watch the network learn in real time. However, the original goal was to allow the user to play the hyperparameters of the model (the number of layers, the number of neurons, the error functions, the learning rate, the level of randomness [exploration vs exploitation] and more) and to allow the user to understand in depth through experience and observation how to develop a trained and efficient model.
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ fontSize: '12px'}}>
                I hope that one day I will find the time to continue the project, in the meantime a rough draft is shown here - but hey! This snake has a brain and while you read this he had time to learn!
            </Typography>
            <Typography variant="body2" gutterBottom mb={1} sx={{ fontSize: '12px'}}>
                It usually takes the snake about 60 games to learn. Worth the wait! 🤩🐍
            </Typography>


            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                <Box sx={{ display: 'inline-flex', flexWrap: 'wrap', backgroundColor: "#000",  minWidth: 240 }}>
                    {board.map((row, i) => (
                        <div key={i}>
                            {row.map((cell, j) => {
                                const isApple = cell === "apple";
                                const isSnakeBody = cell === "snakeBody";
                                const isSnakeHead = cell === "snakeHead";
                                return <Cell key={`${i}-${j}`}
                                             isSnakeHead={isSnakeHead}
                                             isSnakeBody={isSnakeBody}
                                             isApple={isApple} />;
                            })}
                        </div>
                    ))}
                </Box>


                <Container sx={{ width: 200 }}>
                    <Typography variant="body1">
                        Learning rate: 0.0001
                    </Typography>
                    <Typography variant="body1">
                        Games: {stepData.games}
                    </Typography>
                    <Typography variant="body1">
                        Randomness: {parseInt(String(stepData.randomness * 100))}%
                    </Typography>
                    <Typography variant="body1">
                        Best Reward: {stepData.bestReward}
                    </Typography>
                    <Typography variant="body1" style={{ color: stepData.reward < 0 ? 'red' : 'green' }}>
                        Reward: {stepData.reward}
                    </Typography>

                    <Typography variant="body1">
                        Loss: {stepData.loss}
                    </Typography>
                </Container>
            </Container>
        </Container>
    );

};

export default SnakeGame;
