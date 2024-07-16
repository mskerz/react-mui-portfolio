import React from 'react';
import { BrowserRouter as  Router } from 'react-router-dom';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';


const theme = createTheme(); // Create a theme instance








function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
          <Box  sx={{ minHeight: '100vh', background: 'linear-gradient(81deg, rgba(0,0,0,1) 0%, rgba(1,56,48,1) 44%, rgba(0,0,0,1) 100%)' }}>
              <AnimatedRoutes/>
          </Box>
      </Router>
    </ThemeProvider>
  );
}


export default App;
