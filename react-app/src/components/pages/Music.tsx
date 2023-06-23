import React from 'react';
import { Box, Container, Typography, Link, Button } from '@mui/material';

const MusicPage: React.FC = () => {
    return (
        <>
            <Container>
                <Box display="flex" justifyContent="center" alignItems="center" mt={2} mb={2}>
                    <Typography variant="h4" color="text.primary">
                        Music is everything
                    </Typography>
                </Box>


                <Typography variant="h6" color="text.primary" mt={4}>
                    Below is a captivating short film created by Guy, unfolding my personal journey of exploration, growth, and self-discovery in engineering, life, and music.
                </Typography>
                
                <Box mt={2} width="100%" minHeight={0} paddingBottom="56.25%" position="relative">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        style={{ position: "absolute" }}
                        src="https://www.youtube.com/embed/-3ZenZqfR0k?start=39" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </Box>
            </Container>
        </>
    );
};

export default MusicPage;
