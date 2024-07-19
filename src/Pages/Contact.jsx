import { ThemeProvider, useTheme } from '@mui/material';
import { TextField, Container, Typography, Box, Button } from '@mui/material';

// สร้างธีมใหม่โดยการเปลี่ยนแปลงสี outline และสีพื้นหลังของ TextField


// ใช้ ThemeProvider รอบ TextField เพื่อใช้ธีมที่กำหนดไว้
function Contact() {
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <Typography variant="h2" component="h1" color={theme.palette.text.primary} gutterBottom>
            Contact Me
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
          >
            <TextField
              required
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              required
              fullWidth
              label="Email"
              name="email"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              required
              fullWidth
              label="Message"
              name="message"
              variant="outlined"
              multiline
              rows={4}
              sx={{ mb: 2 }}
            />
            <div style={{ justifyContent: 'center' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button
                  type="submit"

                  variant="contained"
                  sx={{ mt: 3, mb: 2, color: theme.palette.mode.dark, backgroundColor:theme.palette.primary.main, '&:hover': {  backgroundColor: theme.palette.secondary.main } }}
                >
                  Send Message
                </Button>
              </Box>

            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Contact;
