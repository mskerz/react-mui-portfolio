import { Container, Typography } from "@mui/material";
import Vector from '../assets/vector2.png'; // Ensure this path is correct
import { makeStyles } from "@mui/styles";
import { ReactTyped } from "react-typed";
const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', 
      alignSelf: 'center',
      gap: theme.spacing(10), // Adjust the gap between image and text
  },
  textContainer: {
    textAlign: 'left', // Center text horizontally
  },


}));
function Home() {
  const classes = useStyles();

  return (
    <div   >
      <Container maxWidth="md">
            <div className={classes.root} >
              <div style={{display:'flex',flex:'row',marginTop:100}}>
              <div  className={classes.textContainer}>
                <Typography  variant="h2" component="h1" gutterBottom sx={{marginTop:'100px'}} >
                  Wichasin <span style={{ color: '#00DFC0' }}>Sutthiarj</span>          
                </Typography>
                <Typography variant="p" sx={{fontSize:30}} >
                  <ReactTyped 
                      strings={["I'm Frontend Developer Intern"]}
                      typeSpeed={150}
                      backSpeed={100}
                      loop
                   />
                </Typography>
              </div>
              <img src={Vector} alt="Profile" width={350} style={{marginLeft:'5px'}}  />
              </div>

            </div>
      </Container>

      
    </div>
  );
}
export default Home;
