import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    My App
                </Typography>
                <Button color="inherit" component={RouterLink} to="/">
                    Home
                </Button>
                <Button color="inherit" component={RouterLink} to="/about">
                    About
                </Button>
                <Button color="inherit" component={RouterLink} to="/contact">
                    Contact
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
