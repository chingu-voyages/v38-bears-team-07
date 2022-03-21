import React, { useState } from 'react';
import { Container } from '@mui/material';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';

function Home() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    const [isRegister, setIsRegister] = useState(false);
    const [forgotPassword, setForgotPassword] = useState(false);
    return (
        <Container
            sx={{
                height: '100vh',
                minWidth: '100vw',
                background: `url(https://source.unsplash.com/random/${w}x${h}?dating)no-repeat center center/cover`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '0 15px',
                alignItems: 'center',
            }}
        >
            {forgotPassword ? (
                <ForgotPassword
                    setIsRegister={setIsRegister}
                    setForgotPassword={setForgotPassword}
                />
            ) : isRegister ? (
                <SignUp
                    setIsRegister={setIsRegister}
                    setForgotPassword={setForgotPassword}
                />
            ) : (
                <Login
                    setIsRegister={setIsRegister}
                    setForgotPassword={setForgotPassword}
                />
            )}
        </Container>
    );
}
export default Home;
