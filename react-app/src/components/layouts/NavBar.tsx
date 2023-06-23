import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Menu, Box, MenuItem, IconButton, Drawer, List, ListItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import ChatIcon from '@mui/icons-material/Chat';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GamesIcon from '@mui/icons-material/Games';


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
        { link: "/", title: "Home 🏠", icon: <HomeIcon /> },
        { link: "/snake-ai", title: "Snake Game", icon: <VideogameAssetIcon /> },
        { link: "/prompt", title: "Prompt", icon: <ChatIcon /> },
        { link: "/music", title: "Music 🎸", icon: <ChatIcon /> },
        { link: "/api-bot", title: "Whatsapp Bot", icon: <ChatIcon /> },
        { link: "/minimax-tictactoe", title: "Tic Tac Toe", icon: <GamesIcon /> },
        { link: "/minimax-chess", title: "Chess", icon: <GamesIcon /> },
    ];
    
    

    const renderMenuItems = () => (
        menuItems.map((item, index) => (
            <MenuItem component={RouterLink} to={item.link} key={index}>
                {/* {item.icon} {" "} */}
                {item.title.toUpperCase()}
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
            <Button component={RouterLink} to="/" color="inherit">
                <Typography variant="h6">
                    Joe Axelrod Tech Blog
                </Typography>
            </Button>
            <Box flexGrow={1} />
            {renderMenuItems()}
        </Toolbar>
    );
    

    return (
        <AppBar position="static">
            {isMobile ? (
                <>
         <Toolbar>
    <Button component={RouterLink} to="/" color="inherit">
        <Typography variant="h6">
            Joe Axelrod Tech Blog
        </Typography>
    </Button>
    <Box flexGrow={1} />
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
