import React from 'react';
import {Container, Typography} from '@mui/material';
import ChatPage from './ChatPage';

const HomePage: React.FC = () => {
    return (
        <Container>

            <Typography variant="h2" gutterBottom>
                Welcome to the Home Page
            </Typography>
            <ChatPage/>
        </Container>
    );
};

export default HomePage;
