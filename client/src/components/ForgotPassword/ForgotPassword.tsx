import React from 'react';
import {
    Paper,
    Box,
    Avatar,
    Typography,
    Button,
    Grid,
    Link,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';

type ForgotPasswordProps = {
    setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
    setForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

function ForgotPassword({
    setIsRegister,
    setForgotPassword,
}: ForgotPasswordProps) {
    return (
        <Paper
            sx={{
                maxWidth: '80vw',
                minWidth: '450px',
                padding: '2rem',
                borderRadius: '10px',
                background:
                    'linear-gradient(180deg, rgba(169,198,217,1) 15%, rgba(242,167,75,1) 90%)',
                boxShadow: '.2px 12px 18px rgba(131,153,167,0.6)',
                '&:hover': {
                    boxShadow: '0px 24px 36px rgba(131,153,167,0.99)',
                },
            }}
        >
            <FormContainer
                defaultValues={{ name: '', password: '' }}
                onSuccess={(data) => console.log(data)}
            >
                <Box
                    sx={{
                        marginBottom: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Password Reset
                    </Typography>
                </Box>
                <Box sx={{ marginBottom: '1rem' }}>
                    <TextFieldElement
                        name="email"
                        label="Your Email Address"
                        required
                        sx={{ width: '100%' }}
                    />
                </Box>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sent Password Reset Email
                </Button>
                <Box>
                    <Grid container>
                        <Grid item xs>
                            <Link
                                onClick={() => {
                                    setIsRegister(false);
                                    setForgotPassword(false);
                                }}
                                sx={{ cursor: 'pointer' }}
                                variant="body1"
                            >
                                Back to Login
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link
                                variant="body1"
                                sx={{ cursor: 'pointer' }}
                                onClick={() => {
                                    setForgotPassword(false);
                                    setIsRegister(true);
                                }}
                            >
                                {'New to Mate? Sign Up'}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </FormContainer>
        </Paper>
    );
}

export default ForgotPassword;
