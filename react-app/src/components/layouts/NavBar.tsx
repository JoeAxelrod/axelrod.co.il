import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton, Drawer, List, ListItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleClick = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleClose = () => {
        setDrawerOpen(false);
    };

    const menuItems = [
        { link: "/", title: "Home" },
        { link: "/snake-ai", title: "Snake Game" },
        { link: "/prompt", title: "Prompt" },
        { link: "/api-bot", title: "Whatsapp Bot" },
        { link: "/minimax-tictactoe", title: "Minimax Tic Tac Toe" },
        { link: "/minimax-chess", title: "Minimax Chess" },
    ];

    const renderMenuItems = () => (
        menuItems.map((item, index) => (
            <MenuItem component={RouterLink} to={item.link} key={index}>
                {item.title}
            </MenuItem>
        ))
    );

    const renderMobileMenu = () => (
        <Drawer anchor="right" open={drawerOpen} onClose={handleClose}>
            <List component="nav">
                {renderMenuItems()}
            </List>
        </Drawer>
    );

    const renderDesktopMenu = () => (
        <Toolbar>
           <Button component={RouterLink} to="/" color="inherit" style={{ flexGrow: 1 }}>
                <Typography variant="h6">
                    Joe Axelrod Tech Blog
                </Typography>
            </Button>
            {renderMenuItems()}
        </Toolbar>
    );

    return (
        <AppBar position="static">
            {isMobile ? (
                <>
                    <Toolbar>
                        <Button component={RouterLink} to="/" color="inherit" style={{ flexGrow: 1 }}>
                            <Typography variant="h6">
                                Joe Axelrod Tech Blog
                            </Typography>
                        </Button>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                    {renderMobileMenu()}
                </>
            ) : renderDesktopMenu()}
        </AppBar>
    );
};

export default NavBar;
