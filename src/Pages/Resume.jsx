import { Button, Container, Grid, Typography, useTheme } from '@mui/material'
import { CloudDownload } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const resumeUrl = 'https://export-download.canva.com/P-OKk/DAGJ_7P-OKk/139/0-8108039844491874417.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20240717%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240717T152319Z&X-Amz-Expires=64302&X-Amz-Signature=9cc67626152a0f2fb2d34b00e4d04684e5da2fa76d367480476ed57faea9d7ad&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27%25E0%25B8%25AA%25E0%25B8%25AB%25E0%25B8%2581%25E0%25B8%25B4%25E0%25B8%2588%2520Resume%2520TH_EN.pdf&response-expires=Thu%2C%2018%20Jul%202024%2009%3A15%3A01%20GMT'
function Resume() {
  const theme = useTheme();
  return (
    <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Grid container direction="column" alignItems="center" spacing={3} color={theme.palette.text.primary}>
        <Grid item>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'light', textAlign: 'center' }}>
            Resume
          </Typography>
          <Typography variant="subtitle1" component="p" sx={{ textAlign: 'center' }}>
            Click the button below to download my resume.
          </Typography>
        </Grid>
        <Grid item>
          <Link component={Link} to={resumeUrl} target="_blank">
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.mode.dark,
                '&:hover': {
                  backgroundColor: "#00bfa5",
                  color: "white"
                },
                padding: '10px 20px',
                textTransform: 'none',
                fontSize: '16px',
              }}
              download
            >
              <CloudDownload sx={{ marginRight: '10px' }} />
              Resume
            </Button>
          </Link>
        </Grid>
      </Grid>

    </Container>
  )
}

export default Resume