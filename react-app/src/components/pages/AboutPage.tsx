import React from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { PlayCircleOutline } from '@mui/icons-material';

import styled from '@emotion/styled';

const AboutContainer = styled(Container)`
  padding: 2rem 0;
`;

const PlayButton = styled(Button)`
  margin-top: 2rem;
`;


const AboutPage: React.FC = () => {
    return (
        <AboutContainer maxWidth="lg">
            <Typography variant="h2" gutterBottom>
                About AI Snake Game
            </Typography>
            <Typography variant="body1" paragraph>
                Welcome to our AI-based Snake Game. It's not your regular snake game, but an intuitive learning platform that introduces the core concepts of neural networks and how they work.
            </Typography>
            <Typography variant="body1" paragraph>
                As the snake moves around the screen and consumes the apples, the neural network learns and improves its performance. By observing the snake, you are essentially observing how the neural network grows smarter with each iteration.
            </Typography>
            <Typography variant="body1" paragraph>
                Not only can you play the game, but you also have the ability to tweak the underlying neural network parameters. This allows you to see how changes in the network architecture and parameters can impact the learning process and the behaviour of the AI.
            </Typography>
            <Typography variant="body1" paragraph>
                Our site has been designed with Material-UI, a popular React UI framework, which helps us ensure a visually appealing, responsive, and accessible interface. We hope you enjoy the rich and immersive experience we have strived to create.
            </Typography>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={8}>
                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                        <Typography variant="h6">
                            Ready to see the AI Snake in action?
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                        <PlayButton variant="contained" color="primary" startIcon={<PlayCircleOutline />} size="large">
                            Play Now
                        </PlayButton>
                    </Box>
                </Grid>
            </Grid>
        </AboutContainer>
    );
};

export default AboutPage;
