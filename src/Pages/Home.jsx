import { Container, Typography, useMediaQuery } from "@mui/material";
import Vector from '../assets/vector2.png'; // Ensure this path is correct
import { makeStyles } from "@mui/styles";
import { ReactTyped } from "react-typed";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: theme.spacing(10), // Adjust the gap between image and text
    flexDirection: 'column', // For mobile layout
    textAlign: 'center', // For mobile layout
  },
  textContainer: {
    textAlign: 'left', // Center text horizontally
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center', // Center text horizontally on mobile
    },
  },
}));

function Home() {
  const classes = useStyles();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <div>
      <Container maxWidth="md">
        <div className={classes.root}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column-reverse' : 'row', alignItems: 'center', marginTop: 100 }}>
            <div className={classes.textContainer}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ marginTop: isMobile ? '20px' : '100px' }}>
                Wichasin <span style={{ color: '#00DFC0' }}>Sutthiarj</span>
              </Typography>
              <Typography variant="p" sx={{ fontSize: 30 }}>
                <ReactTyped
                  strings={["I'm Developer","I like Technology"]}
                  typeSpeed={150}
                  backSpeed={100}
                  loop
                />
              </Typography>
            </div>
            <img src={Vector} alt="Profile" width={isMobile ? 250 : 350} style={{ marginLeft: isMobile ? '0px' : '5px', marginBottom: isMobile ? '20px' : '0px' }} />
          </div>
        </div>
        <Button component={Link} to="/contact" variant="contained" color="primary" sx={{ color: "black", backgroundColor: '#FFF', '&:hover': { color: 'white', backgroundColor: "#00DFC0" } }}>
          Contact Me
        </Button>
      </Container>
    </div>
  );
}

export default Home;
