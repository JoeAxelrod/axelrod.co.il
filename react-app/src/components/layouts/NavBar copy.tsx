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

    const [anchorElAi, setAnchorElAi] = useState<null | HTMLElement>(null);

    const handleClickAi = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElAi(event.currentTarget);
    };

    const handleCloseAi = () => {
        setAnchorElAi(null);
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
                <Button color="inherit" onClick={handleClickAi}>
                    ai stuff
                </Button>
                <Menu
                    anchorEl={anchorElAi}
                    open={Boolean(anchorElAi)}
                    onClose={handleCloseAi}
                    onClick={handleCloseAi}
                >
                    <MenuItem component={RouterLink} to="/snake-ai">
                        Snake Game
                    </MenuItem>
                    <MenuItem component={RouterLink} to="/prompt">
                        prompt
                    </MenuItem>
                </Menu>
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




