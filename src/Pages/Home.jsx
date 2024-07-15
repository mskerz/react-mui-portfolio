import { Container, Typography } from "@mui/material";
import ProfileImage from '../assets/avatar.jpg'; // Ensure this path is correct
import { makeStyles } from "@mui/styles";
import { ReactTyped } from "react-typed";


const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(10), // Adjust the gap between image and text
  },
  image: {
      width: '180px',
      height: '180px',
      borderRadius: '50%', // Make the image circular
      objectFit: 'cover', // Ensure the image fits and doesn't stretch
  },


}));
function Home() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="md">
            <div className={classes.root} >
              
              <div>
                <Typography variant="h2" component="h1" gutterBottom>
                  Wichasin <span style={{ color: '#FF9900' }}>Sutthiarj</span>          </Typography>
                <Typography variant="p" style={{fontSize:25}} >
                  <ReactTyped 
                      strings={["I'm Frontend Developer Intern"]}
                      typeSpeed={150}
                      backSpeed={100}
                      loop
                   />
                </Typography>
              </div>
              <img src={ProfileImage} alt="Profile" className={classes.image} />
            </div>
      </Container>

      
    </div>
  );
}
export default Home;
