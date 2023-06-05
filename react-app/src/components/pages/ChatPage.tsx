import React, { useState, useEffect, useRef } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import io, { Socket } from 'socket.io-client';

const SOCKET_SERVER_URL = "http://localhost:3001"; // replace with your server url

const ChatPage: React.FC = () => {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState<Array<{ message: string }>>([]);
    const socketRef = useRef<Socket>();

    useEffect(() => {
        socketRef.current = io(SOCKET_SERVER_URL);

        socketRef.current.on('chat message', (message) => {
            setChat((chat) => [...chat, { message }]);
        });

        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect();
            }
        };
    }, []);

    const sendMessage = (event: React.FormEvent) => {
        event.preventDefault();

        if(socketRef.current) {
            socketRef.current.emit('chat message', message);
        }

        setMessage('');
    };

    return (
        <div>
            <Typography variant="h4" component="h1">
                Chat Page
            </Typography>

            {chat.map((chat, index) => (
                <Typography key={index} variant="body1">
                    {chat.message}
                </Typography>
            ))}

            <form onSubmit={sendMessage}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Message"
                            variant="outlined"
                            fullWidth
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" type="submit" color="primary">
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default ChatPage;
