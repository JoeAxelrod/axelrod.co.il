import React, { useState, useEffect, useRef } from 'react';
import {Box, Container, Typography} from '@mui/material';

interface CellProps {
    isSnake: boolean;
    isApple: boolean;
}

const Cell: React.FC<CellProps> = ({ isSnake, isApple }) => {
    // const color = isSnake ? 'green' : isApple ? 'red' : 'white';

    return (
        <Box
            sx={{
                width: 24,
                height: 24,
            }}
        >
            <Typography fontSize={20}>
                {isApple ? "🍎" : ""}
                {isSnake ? "🤩" : ""}
            </Typography>

        </Box>
    );
};
const SnakeGame: React.FC = () => {
    const oneTimeRef = useRef(false);
    const [board, setBoard] = useState(() =>
        Array.from({ length: 10 }, () => Array(10).fill(false))
    );

    useEffect(() => {
        if (oneTimeRef.current) {
            return;
        }
        oneTimeRef.current = true;

        // Randomly position the snake and apple before starting the game loop
        const randomSnakePositionX = Math.floor(Math.random() * 10);
        const randomSnakePositionY = Math.floor(Math.random() * 10);
        let randomApplePositionX = Math.floor(Math.random() * 10);
        let randomApplePositionY = Math.floor(Math.random() * 10);
        while (randomApplePositionX === randomSnakePositionX
            && randomApplePositionY === randomSnakePositionY) {
            randomApplePositionX = Math.floor(Math.random() * 10);
            randomApplePositionY = Math.floor(Math.random() * 10);
        }

        setBoard((oldBoard) => {
            const newBoard = oldBoard.map((row) => [...row]);
            newBoard[randomSnakePositionX][randomSnakePositionY] = "snake";
            newBoard[randomApplePositionX][randomApplePositionY] = "apple";
            return newBoard;
        });

        const intervalId = setInterval(() => {
            setBoard((oldBoard) => {
                const newBoard = oldBoard.map((row) => [...row]);

                let snakePosition = newBoard.findIndex((row) => row.includes("snake"));
                const snakeRow = newBoard[snakePosition];
                let snakeColumn = snakeRow.findIndex((cell) => cell === "snake");

                newBoard[snakePosition][snakeColumn] = false;

                const randomDirection = ["up", "right", "left", "down"][Math.floor(Math.random() * 4)];
                switch (randomDirection) {
                    case "up":
                        snakePosition--;
                        break;
                    case "right":
                        snakeColumn++;
                        break;
                    case "down":
                        snakePosition++;
                        break;
                    case "left":
                        snakeColumn--;
                        break;
                }

                if (snakePosition < 0 || snakePosition > 9 || snakeColumn < 0 || snakeColumn > 9) {
                    alert("Game Over!");
                    clearInterval(intervalId);
                    return oldBoard; // return the old board state to stop the game
                }

                newBoard[snakePosition][snakeColumn] = "snake";

                return newBoard;
            });
        }, 300);
    }, []);

    return (
        <Container>

            <Typography variant="h2" gutterBottom>
                Welcome to the Snake Game
            </Typography>
            <Typography variant="body1" gutterBottom>
                Use the arrow keys to control the snake and try to eat as many apples as you can without colliding with yourself!
            </Typography>


            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{
                    display: 'inline-flex',
                    flexWrap: 'wrap',
                    backgroundColor: "#000",
                }}>
                    {board.map((row, i) => (
                        <div key={i}>
                            {row.map((cell, j) => {
                                const isApple = cell === "apple";
                                const isSnake = cell === "snake";
                                return <Cell key={`${i}-${j}`} isSnake={isSnake} isApple={isApple} />;
                            })}
                        </div>
                    ))}
                </Box>
            </Container>




        </Container>
    );

};

export default SnakeGame;
