import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
      
    >
      <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Contact Me
          </Typography>
          <Typography variant="body1">
            This is where you can put your contact information.
          </Typography>
      </Container>

    </motion.div>
  );
}
export default Contact;
