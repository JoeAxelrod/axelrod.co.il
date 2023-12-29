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
                        Understanding Node.js and Multithreading
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" paragraph>
                        Node.js is renowned for its efficiency and speed in handling I/O-bound tasks, but does it only
                        run on one thread? Let's explore.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        Node.js primarily operates on a single thread, the event loop, which is ideal for I/O-bound
                        tasks. This design choice is intentional as Node.js servers typically handle API calls and
                        coordinate I/O operations rather than performing heavy computational tasks. The event loop
                        efficiently manages asynchronous operations, making Node.js a top choice for web servers and
                        RESTful APIs.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        While Node.js excels in single-threaded scenarios, there are ways to harness multiple threads
                        for CPU-bound tasks. Node.js offers the <code>cluster</code> module, which allows applications
                        to spawn multiple processes (workers). These workers can run on separate CPU cores, thereby
                        distributing the workload.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        However, multithreading introduces complexity: inter-process communication becomes necessary,
                        and tools like Redis may be employed for managing shared state and message passing between
                        processes. Developing and maintaining a multithreaded application is more intricate due to
                        potential issues like race conditions and deadlocks.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        In the realm of server development, a stateless architecture is often recommended. It simplifies
                        scaling as each request can be treated independently, allowing for horizontal scaling. This
                        approach aligns well with Node.js’s strengths in handling I/O-bound tasks.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        Parallel processing, when done correctly, can indeed boost performance. However, in a typical
                        Node.js application scenario, leveraging all available CPU threads may not yield significant
                        benefits, especially if the workload is not CPU-intensive.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        Node.js is optimized for I/O-bound operations and shines in this area due to its single-threaded
                        event loop. While it's possible to employ multithreading for CPU-bound tasks, this comes with
                        added complexity and potential challenges. The key is to understand your application’s
                        requirements and choose the architecture that best fits its workload profile.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        In essence, Node.js offers the tools and flexibility for both single-threaded and multithreaded
                        applications, but it's the nature of your project that should guide the decision on which path
                        to follow.
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
