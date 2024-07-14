import { Typography, Container, Box, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaBootstrap, FaLaravel } from 'react-icons/fa';
import { SiFastapi,SiFlutter,SiDocker } from 'react-icons/si';

function About() {
    const skills = [
        { name: 'HTML', icon: <FaHtml5 color="#E34F26" size={40} /> },
        { name: 'CSS', icon: <FaCss3Alt color="#1572B6" size={40} /> },
        { name: 'JavaScript', icon: <FaJs color="#F7DF1E" size={40} /> },
        { name: 'React', icon: <FaReact color="#61DAFB" size={40} /> },
        { name: 'Angular', icon: <FaAngular color="#DD0031" size={40} /> },
        { name: 'Flutter', icon: <SiFlutter color="#43CAF5" size={40} /> }, // ใช้ไอคอน Flutter จาก react-icons
        { name: 'Laravel', icon: <FaLaravel color="#7AB55C" size={40} /> },
        { name: 'FastAPI', icon: <SiFastapi color="#04988A" size={40} /> }, // ใช้ไอคอน FastAPI จาก react-icons
        { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" size={40} /> },
        { name: 'Docker', icon: <SiDocker color="#0db7ed" size={40} /> },

    ];

    return (
        <motion.div
            key="about"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
        >
            <Container maxWidth="md">
                <Typography variant="h2" component="h1" gutterBottom>
                    Hi! I&apos;m Wichasin S.
                </Typography>
                <Typography variant="body1" paragraph>
                    I am a 4th year student studying Computer Science, looking for a cooperative education placement as a Frontend Developer or Backend Developer. I’m enthusiastic and ready to learn new things, and I aim to apply the skills and knowledge I&apos;ve learned to real-world work.
                </Typography>
                <Box my={4}>
                    <Typography variant="h6" gutterBottom>
                        Skills
                    </Typography>
                    <Grid container spacing={2}>
                        {skills.map((skill) => (
                            <Grid item xs={4} sm={3} md={2} key={skill.name} textAlign="center">
                                <Stack direction="column" alignItems="center">
                                    {skill.icon}
                                    <Typography variant="body2" mt={1}>
                                        {skill.name}
                                    </Typography>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </motion.div>
    );
}

export default About;
