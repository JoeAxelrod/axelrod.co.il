import React from 'react';
import { Typography, TextField, Button, Grid } from '@mui/material';



const ContactPage: React.FC = () => {

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div>
            <Typography variant="h4" component="h1">
                Contact Me
            </Typography>

            <Typography variant="body1">
                If you have any questions or would like to get in touch, please fill out the form below.
            </Typography>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Message"
                            variant="outlined"
                            fullWidth
                            required
                            multiline
                            rows={4}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" type="submit" color="primary">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>

    );
};

export default ContactPage;
