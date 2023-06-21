import React, { ReactNode } from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/system';

interface LayoutProps {
    children: ReactNode;
}

const MobilePadding = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        padding: '0',
    },
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
    },
}));

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <MobilePadding>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={10} md={8} lg={7}>
                    {children}
                </Grid>
            </Grid>
        </MobilePadding>
    );
};

export default Layout;
