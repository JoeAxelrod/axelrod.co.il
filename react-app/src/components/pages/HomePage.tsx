import React from 'react';
import { Box, Container, Typography, Link, Button } from '@mui/material';

const HomePage: React.FC = () => {
    return (
        <>
            <img 
                src="/header.jpeg" 
                alt="header" 
                style={{
                    maxWidth: '100%', 
                    width: '100%', 
                    height: '120px', 
                    objectFit: 'cover',
                    objectPosition: '50% 22%',
                    margin: 'auto'
                }}
            />

            <Container>
                <Box display="flex" justifyContent="center" alignItems="center" mt={2} mb={2}>
                    <Typography variant="h4" color="text.primary">
                        Science and tech is everything
                    </Typography>
                </Box>

                <Typography variant="body1" color="text.secondary" style={{ fontSize: '1.1rem' }}>
                    The universe is the most interesting place I've ever lived in and the only way to understand it is (hint: not news and politics sites) to learn more and more about artificial intelligence, algorithms, biology, astronomy, history, physics, chemistry, everything. I want to die at the age of 100 when I realized a little something about this crazy cosmos. Meanwhile, I am a software engineer and algorithm researcher and also sometimes play guitar on the boardwalk.
                </Typography>

                <Typography variant="body1" color="text.secondary" mt={2} style={{ fontSize: '1.1rem' }}>
                    This blog itself is my playground, a space where I share interesting projects, snippets, and musings. It's created with React.js and is open source! You can check out the code on my <Link href="https://github.com/JoeAxelrod/node-react-AI" target="_blank" rel="noopener noreferrer">GitHub</Link>.
                </Typography>

                <Box display="flex" justifyContent="space-around" mt={4} style={{ fontSize: '1.1rem' }}>
                    <Button variant="contained" color="primary" href="https://apibot.chat/" target="_blank" rel="noopener noreferrer">
                        WhatsApp bot
                    </Button>
                    <Button variant="contained" color="primary" href="/snake-ai">
                        Snake Game
                    </Button>
                    <Button variant="contained" color="primary" href="https://github.com/JoeAxelrod/node-react-AI" target="_blank" rel="noopener noreferrer">
                        GitHub Code
                    </Button>
                </Box>
            </Container>
        </>
    );
};

export default HomePage;
