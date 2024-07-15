import { Container, Typography } from "@mui/material";

function Contact() {
  return (
    <div>
      <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Contact Me
          </Typography>
          <Typography variant="body1">
            This is where you can put your contact information.
          </Typography>
      </Container>

    </div>
  );
}
export default Contact;
