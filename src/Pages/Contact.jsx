import { Grid, Paper, ThemeProvider, useTheme, TextField, Container, Typography, Box, Button, Avatar, useMediaQuery } from '@mui/material';
import Vecter from '../assets/image/vector2.png'
// สร้างธีมใหม่โดยการเปลี่ยนแปลงสี outline และสีพื้นหลังของ TextField


// ใช้ ThemeProvider รอบ TextField เพื่อใช้ธีมที่กำหนดไว้
function Contact() {
  const theme = useTheme()
  const MobileScreen = useMediaQuery(theme.breakpoints.down('md') || theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" >
        <Grid container spacing={4} mt={5} alignItems="center" justifyContent="center">
        { !MobileScreen && (
          <Grid item xs={12} md={6}>
            <img src={Vecter} alt="Vector" width="100%" height="100%" />
          </Grid>
        )}
          <Grid item xs={12} md={6}>
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
                sx={{ mt: 2 }}
              >
                <TextField required fullWidth label="Email" name="email" variant="outlined" sx={{ mb: 2 }} />
                <TextField required fullWidth label="Message" name="message" variant="outlined" multiline rows={4} sx={{ mb: 2 }} />
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
                      sx={{ mt: 3, mb: 2, color: theme.palette.mode.dark, backgroundColor: theme.palette.primary.main, '&:hover': { backgroundColor: theme.palette.secondary.main } }}
                    >
                      Message
                    </Button>
                  </Box>

                </div>
              </Box>
            </Box>
          </Grid>
        </Grid>

      </Container>
    </ThemeProvider>
  );
}

export default Contact;
