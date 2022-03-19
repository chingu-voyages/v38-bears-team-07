import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline, ThemeProvider } from '@mui/material';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Router>
            <CssBaseline />
            <App />
        </Router>
    </ThemeProvider>,
    document.getElementById('root')
);

reportWebVitals();
