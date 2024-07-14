import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Typography, Box, createTheme, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import About from './Pages/About';
const theme = createTheme(); // Create a theme instance

function Home() {
  return (
    <div>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="body1">
        This is where you can put an introduction about yourself.
      </Typography>
    </div>
  );
}



function Contact() {
  return (
    <div style={{ marginTop: 0 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1">
        This is where you can put your contact information.
      </Typography>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Container>
          <Box mt={10}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
