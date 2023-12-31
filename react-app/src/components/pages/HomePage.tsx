import React from 'react';
import {Box, Container, Typography, Link, Button} from '@mui/material';

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

                <Box mt={7} p={3} style={{
                    backgroundColor: '#e0f2f1',
                    borderRadius: '10px',
                    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16)'
                }}>
                    <Typography variant="h5" color="text.primary" align="center" gutterBottom>
                        Featured Implementation: Node.js Multi-Threaded Server
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        Dive into the details of how Node.js can be leveraged for multi-threaded server applications.
                        Explore my complete example on GitHub showcasing the use of clusters to enhance the performance
                        and scalability of a Node.js server.
                    </Typography>
                    <Box display="flex" justifyContent="center">
                        <Button variant="outlined" color="primary"
                                href="https://github.com/JoeAxelrod/node-server-multi-threaded" target="_blank"
                                rel="noopener noreferrer">
                            View on GitHub
                        </Button>
                    </Box>
                </Box>


                {/* New Blog Post Section */}
                <Box mt={7} mb={5} p={3} style={{
                    backgroundColor: '#f0f0f0',
                    borderRadius: '10px',
                    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)'
                }}>
                    <Typography variant="h3" color="text.primary" gutterBottom>
                        Node.js: Single Threaded or Multithreaded?
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" paragraph>
                        Debunking myths and understanding the true nature of Node.js and its threading capabilities.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        1. The NodeJS main process runs on only one thread.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        2. NodeJS activates through its famous event loop mechanism many threads that do asynchronous
                        operations of reading and writing, DB queries, timing operations, and web requests, or in short,
                        all I/O operations.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        3. It is possible to run a NodeJS server with multiple threads and all of them will serve one
                        server and domain and port.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        4. It will indeed be more efficient in CPU calculations.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        5. But if the bottleneck of your server is CPU - you are doing something very, very wrong.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        6. A server should not do logic but answer calls and run I/O processes.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        7. For this task one thread should be completely sufficient.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        8. This is the philosophy behind NodeJS.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        9. Adding threads will make NodeJS stateless [which is not bad at all if you ask me!], lacks run
                        time memory, because the threads do not share memory.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        10. In addition, multiple threads add additional development complexities. While this will be a
                        bit more efficient in CPU calculations, it's also a bit more complex. Simplicity is indeed an
                        element to consider!
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        11. In short, if you are a server that shouldn't do a lot of CPU processing then NodeJS on a
                        single thread is perfect for you.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        12. Here is a multi-threaded NodeJS implementation that I just wrote to learn hands-on.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        13. <Link
                        href="https://github.com/JoeAxelrod/node-server-multi-threaded">https://github.com/JoeAxelrod/node-server-multi-threaded</Link>
                    </Typography>
                </Box>


                {/* Introduction Section */}
                <Box mt={2} mb={2}>
                    <Typography variant="h4" color="text.primary" align="center">
                        Science and tech are everything
                    </Typography>
                </Box>

                <Typography variant="body1" color="text.secondary" paragraph style={{fontSize: '1.1rem'}}>
                    The universe is the most interesting place I've ever lived in and the only way to understand it is
                    to learn more about artificial intelligence, algorithms, biology, astronomy, history, physics,
                    chemistry, and everything else. Meanwhile, I am a software engineer and algorithm researcher who
                    sometimes plays guitar on the boardwalk.
                </Typography>

                <Typography variant="body1" color="text.secondary" paragraph style={{fontSize: '1.1rem'}}>
                    This blog is my playground, where I share interesting projects, snippets, and musings. Created with
                    React.js, it's open source on my <Link href="https://github.com/JoeAxelrod/node-react-AI"
                                                           target="_blank" rel="noopener noreferrer">GitHub</Link>.
                </Typography>

                {/* Project Links Section */}
                <Box display="flex" justifyContent="center" mt={4} style={{fontSize: '1.1rem'}}>
                    <Button variant="contained" color="primary" href="https://apibot.chat/" target="_blank"
                            rel="noopener noreferrer">
                        WhatsApp bot
                    </Button>
                    <Button variant="contained" color="primary" href="/snake-ai">
                        Snake Game
                    </Button>
                    <Button variant="contained" color="primary" href="https://github.com/JoeAxelrod/node-react-AI"
                            target="_blank" rel="noopener noreferrer">
                        GitHub Code
                    </Button>
                </Box>

                <Typography variant="body1" color="text.secondary" paragraph mt={4} style={{fontSize: '1.1rem'}}>
                    Discover projects like a <Link href="https://apibot.chat/" target="_blank"
                                                   rel="noopener noreferrer">WhatsApp bot</Link> and an AI-based <Link
                    href="/snake-ai">snake game</Link>. Plus, delve into algorithm challenges like competing with
                    Stockfish in chess at <Link href="/minimax-chess">Minimax Chess</Link>.
                </Typography>

                {/* Latest Post Section */}
                <Box mt={7} p={2} style={{backgroundColor: '#f0f0f0', borderRadius: '10px'}}>
                    <Typography variant="h5" color="text.primary" align="center">
                        Don't miss my latest post!
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph mt={2}
                                style={{fontSize: '1.1rem', textAlign: 'center'}}>
                        Explore the simplicity and power of GitHub Actions. <Link href="/github-actions">Read
                        here!</Link>
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default HomePage;
