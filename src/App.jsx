// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';
import { ThemeContextProvider } from './provider/ThemeContext';
import DeprecatedAlert from './components/DeprecatedAlert';

function App() {
    return (
        <ThemeContextProvider>
            <Router>
                <Navbar />
                <DeprecatedAlert />
                <Box sx={{ minHeight: '100vh' }}>
                    <AnimatedRoutes />
                </Box>
            </Router>
        </ThemeContextProvider>
    );
}

export default App;
