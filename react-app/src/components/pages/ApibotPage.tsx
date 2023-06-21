import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Launch } from '@mui/icons-material';
import styled from '@emotion/styled';

const ApibotContainer = styled(Container)`
  padding: 2rem 0;
`;

const GetStartedButton = styled(Button)`
  margin-top: 2rem;
`;

const ApibotPage: React.FC = () => {
    return (
        <ApibotContainer maxWidth="lg">
            <Typography variant="h2" gutterBottom>
                About API Bot Chat
            </Typography>
            <Typography variant="body1" paragraph>
                Welcome to API Bot Chat, your go-to place for a free, unofficial WhatsApp API. 
            </Typography>
            <Typography variant="body1" paragraph>
                API Bot Chat enables you to send WhatsApp messages, receive to your server and even create an automated bot. Our platform operates in a completely free and secure manner.
            </Typography>
            <Typography variant="body1" paragraph>
                To get started, all you need to do is register and scan the QR code. We assure you, we do not save or use your data in any manner. Once this step is complete, you will be able to unlock a plethora of features.
            </Typography>
            <Typography variant="body1" paragraph>
                API Bot Chat is a non-profit project, written purely for the purpose of learning and enjoyment. We are committed to creating a platform that is safe, intuitive, and easy-to-use for all our users.
            </Typography>
            <Box display="flex" justifyContent="center">
                <a href="https://apibot.chat/" target="_blank" rel="noopener noreferrer">
                    <GetStartedButton variant="contained" color="primary" startIcon={<Launch />} size="large">
                        Get Started
                    </GetStartedButton>
                </a>
            </Box>
        </ApibotContainer>
    );
};

export default ApibotPage;
