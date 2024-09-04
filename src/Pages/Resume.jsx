import { Button, Container, Grid, Typography, useTheme } from '@mui/material'
import { CloudDownload } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const resumeUrl = 'https://drive.google.com/file/d/1N6VKBULFSRaHqiB-7p2l7IptEcIxsSJg/view?usp=sharing'
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