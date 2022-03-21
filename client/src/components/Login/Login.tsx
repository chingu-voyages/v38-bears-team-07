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
import {
    FormContainer,
    PasswordElement,
    TextFieldElement,
} from 'react-hook-form-mui';
import LockIcon from '@mui/icons-material/Lock';

type LoginProps = {
    setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
    setForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

// handleClick:(e:React.MouseEvent<HTML>,id:number) => void
function Login({ setIsRegister, setForgotPassword }: LoginProps) {
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
                        Sign in to your MATE account
                    </Typography>
                </Box>
                <Box sx={{ marginBottom: '1rem' }}>
                    <TextFieldElement
                        name="email"
                        label="Email Address"
                        type="email"
                        required
                        sx={{ width: '100%' }}
                    />
                </Box>
                <Box sx={{ marginBottom: '1rem' }}>
                    <PasswordElement
                        name="password"
                        label="Password"
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
                    Sign In
                </Button>
                <Box>
                    <Grid container>
                        <Grid item xs>
                            <Link
                                onClick={() => setForgotPassword(true)}
                                sx={{ cursor: 'pointer' }}
                                variant="body1"
                            >
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link
                                variant="body1"
                                sx={{ cursor: 'pointer' }}
                                onClick={() => {
                                    setIsRegister((prev) => !prev);
                                    setForgotPassword(false);
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

export default Login;
