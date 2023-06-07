import React, { ReactNode } from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/system';


interface LayoutProps {
    children: ReactNode;
}

const MobilePadding = styled('div')(({ theme }) => ({
    // Remove padding on screens larger than small
    [theme.breakpoints.up('sm')]: {
        padding: '0',
    },
    // Add padding on extra small screens (mobile)
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
    },
}));

// Layout component that centers its children and adjusts its padding based on screen size
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <MobilePadding>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    {children}
                </Grid>
            </Grid>
        </MobilePadding>
    );
};

export default Layout;
