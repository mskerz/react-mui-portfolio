import { Container, Typography, useMediaQuery, useTheme, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import Hello from '../assets/image/Hello.gif'
import {ReactTyped} from 'react-typed'


function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column-reverse' : 'row',
            alignItems: 'center',
            marginTop: 100,
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <Typography
              variant="h2"
              component="h3"
              gutterBottom
              sx={{
                marginTop: isMobile ? '20px' : '50px',
                fontWeight: 'bold',
                color: theme.palette.text.primary,
              }}
            >
              <div style={{ fontSize: 25, color: theme.palette.secondary.main }}>
                Hi <img src={Hello} alt="Hello" width="25px" />, I'm
              </div>
              Wichasin Sutthiarj
            </Typography>
            <Typography variant="p" sx={{ fontSize: 30, color: theme.palette.text.primary }}>
              <ReactTyped
                strings={["Frontend Developer", "Fullstack Developer"]}
                typeSpeed={160}
                backSpeed={100}
                loop
              />
            </Typography>
            <div>
              <Button
                component={Link}
                to="/resume"
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: theme.palette.secondary.main,
                  marginTop: 3,
                  p: 1.5,
                  paddingLeft: 4,
                  paddingRight: 4,
                  borderRadius: 6,
                  '&:hover': {
                    color: "white",
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
              >
                Resume
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
