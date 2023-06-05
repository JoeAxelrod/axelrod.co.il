import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';
import { AuthContext } from './../../providers/AuthProvider';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    const authContext = useContext(AuthContext);
    if (!authContext) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    const { loggedIn, setLoggedIn } = authContext;

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // request to your server
        setLoggedIn(true);
    };

    // If the user is already logged in, redirect them to the home page.
    if (loggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <Typography variant="h4" component="h1">
                Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    required
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button variant="contained" type="submit" color="primary">
                    Login
                </Button>
            </form>
        </div>
    );
};

export default LoginPage;
