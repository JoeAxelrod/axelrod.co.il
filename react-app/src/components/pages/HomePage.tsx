import React from 'react';
import {Box, Container, Typography} from '@mui/material';
import ChatPage from './ChatPage';


const HomePage: React.FC = () => {
    return (
        <Container>

            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography variant="subtitle1" gutterBottom sx={{ color: '#1877f2', fontSize: '14px' }}>
                    - React.js Node.js AI project -
                </Typography>
            </Box>


            <ChatPage/>
        </Container>
    );
};

export default HomePage;
