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
          <Box mt={10}>
              <AnimatedRoutes/>
          </Box>
      </Router>
    </ThemeProvider>
  );
}


export default App;
