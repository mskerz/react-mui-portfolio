import { Container, Typography, useMediaQuery } from "@mui/material";
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
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <div>
      <Container >
        <div className={classes.root}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column-reverse' : 'row', alignItems: 'center', marginTop: 100 }}>
            <div className={classes.textContainer}>

              <Typography variant="h2" component="h3" gutterBottom sx={{ marginTop: isMobile ? '20px' : '50px', fontWeight: 'bold' }}>
                <div style={{fontSize:25,color:"#00ff87"}}>Hi <img src={Hello} alt="Hello" width="25px"/>, I'm</div>
                Wichasin  Sutthiarj
              </Typography>
              <Typography variant="p" sx={{ fontSize: 30 }}>
                <ReactTyped
                  strings={["Software Engineer","Frontend Developer", "Fullstack Developer"]}
                  typeSpeed={160}
                  backSpeed={100}
                  loop
                />

              </Typography>
              <div >
                <Button component={Link} to="/resume" variant="contained"   color="primary" sx={{ color: "black", backgroundColor: '#00f496',marginTop:3, p:1.5,paddingLeft:4,paddingRight:4, borderRadius:6, '&:hover': { color: 'black', backgroundColor: "#00e08a" } }}>
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
