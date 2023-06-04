import React, { ReactNode } from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/system';


interface LayoutProps {
    children: ReactNode;
}


const MobilePadding = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        padding: '0', // Remove padding on screens larger than small
    },
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2), // Add padding on extra small screens (mobile)
    },
}));




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
