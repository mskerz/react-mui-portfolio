import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import ProfileImage from '../assets/avatar.jpg'; // Ensure this path is correct
import { makeStyles } from "@mui/styles";



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
    <motion.div
      key="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
    >
      <div className={classes.root}>
        
        <div>
          <Typography variant="h2" component="h1" gutterBottom>
            Wichasin <span style={{ color: '#FF9900' }}>Sutthiarj</span>          </Typography>
          <Typography variant="p" style={{fontSize:25}} >
            I&apos;m Frontend Developer Intern
          </Typography>
        </div>
        <img src={ProfileImage} alt="Profile" className={classes.image} />
      </div>
      
    </motion.div>
  );
}
export default Home;
