import React from 'react';
import { Container, Typography, AppBar, Toolbar, Button } from '@mui/material';

function App() {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="body1">
        This is where you can put an introduction about yourself.
      </Typography>
      <Button variant="contained" color="primary">
        Contact Me
      </Button>
    </Container>
  );
}

export default App;
