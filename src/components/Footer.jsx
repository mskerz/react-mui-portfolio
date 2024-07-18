// Footer.js

import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 2 }}>
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary" align="center">
            <Link color="inherit" href="#">
              Terms of Service
            </Link>{' '}
            |{' '}
            <Link color="inherit" href="#">
              Privacy Policy
            </Link>
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
