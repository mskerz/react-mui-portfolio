import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ReactTyped } from "react-typed";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Hello from '../assets/image/Hello.gif'
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
  const theme = useTheme();

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <div>
      <Container >
        <div className={classes.root}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column-reverse' : 'row', alignItems: 'center', marginTop: 100 }}>
            <div className={classes.textContainer}>

              <Typography variant="h2" component="h3" gutterBottom sx={{ marginTop: isMobile ? '20px' : '50px', fontWeight: 'bold', color: theme.palette.text.primary }}>
                <div style={{ fontSize: 25, color: theme.palette.secondary.main }}>Hi <img src={Hello} alt="Hello" width="25px" />, I'm</div>
                Wichasin  Sutthiarj
              </Typography>
              <Typography variant="p" sx={{ fontSize: 30,color:theme.palette.text.primary }}>
                <ReactTyped
                  strings={["Frontend Developer", "Fullstack Developer"]}
                  typeSpeed={160}
                  backSpeed={100}
                  loop
                />

              </Typography>
              <div >
                <Button component={Link} to="/resume" variant="contained"
                  sx={{
                    color: "white",
                    backgroundColor: theme.palette.secondary.main,
                    marginTop: 3, p: 1.5, paddingLeft: 4, paddingRight: 4, borderRadius: 6, '&:hover': { color: "white", backgroundColor: theme.palette.primary.main }
                  }}>
                  Resume
                </Button>
              </div>
            </div>
            {/* <img src={Vector} alt="Profile" width={isMobile ? 250 : 350} style={{ marginLeft: isMobile ? '0px' : '5px', marginBottom: isMobile ? '20px' : '0px' }} /> */}
          </div>
        </div>

      </Container>
    </div>
  );
}

export default Home;
