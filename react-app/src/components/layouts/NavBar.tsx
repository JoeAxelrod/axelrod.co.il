import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';

const NavBar: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Joe Axelrod Tech Blog
                </Typography>
                <Button color="inherit" component={RouterLink} to="/">
                    Home
                </Button>
                <Button color="inherit" component={RouterLink} to="/snake-ai">
                    Snake Game
                </Button>
                <Button color="inherit" component={RouterLink} to="/api-bot">
                    whatsapp bot
                </Button>
                <Button color="inherit" onClick={handleClick}>
                    Algo
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    onClick={handleClose}
                >
                    <MenuItem component={RouterLink} to="/minimax-tictactoe">
                        Minimax Tic Tac Toe
                    </MenuItem>
                    <MenuItem component={RouterLink} to="/minimax-chess">
                        Minimax Chess
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
