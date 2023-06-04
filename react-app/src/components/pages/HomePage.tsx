import React from 'react';
import { Container, Typography } from '@mui/material';
import SnakeGame from './SnakeGame'; // adjust the import path based on your file structure
import { Box } from '@mui/material';

const HomePage: React.FC = () => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Welcome to the Snake Game
            </Typography>
            <Typography variant="body1" gutterBottom>
                Use the arrow keys to control the snake and try to eat as many apples as you can without colliding with yourself!
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <SnakeGame />
            </Box>

        </Container>
    );
};

export default HomePage;
