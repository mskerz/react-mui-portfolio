import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Typography ,Box} from '@mui/material';
import Navbar from './components/Navbar';

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

function About() {
  return (
    <div>
      <Typography variant="h2" component="h1" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
        This is where you can put information about yourself.
      </Typography>
    </div>
  );
}

function Contact() {
  return (
    <div style={{marginTop:0}}>
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
  );
}

export default App;
