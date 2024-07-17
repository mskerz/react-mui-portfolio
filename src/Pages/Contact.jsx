import { ThemeProvider, createTheme } from '@mui/material/styles';
import { TextField, Container, Typography, Box, Button } from '@mui/material';

// สร้างธีมใหม่โดยการเปลี่ยนแปลงสี outline และสีพื้นหลังของ TextField
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.5)', // สีพื้นหลังแบบโปร่งใส 50%
            '& fieldset': {
              borderColor: '#00DFC0', // สี outline ที่ไม่ได้ focus
            },
            '&:hover fieldset': {
              borderColor: '#00DFC0', // สี outline ขณะ hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00DFC0', // สี outline เมื่อมีการ focus
            },
          },
        },
      },
    },
  },
});

// ใช้ ThemeProvider รอบ TextField เพื่อใช้ธีมที่กำหนดไว้
function Contact() {
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
          <Typography variant="h2" component="h1" gutterBottom>
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
                  sx={{ mt: 3, mb: 2, color: "black", backgroundColor: '#00DFC0', '&:hover': {  backgroundColor: "#fff" } }}
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
