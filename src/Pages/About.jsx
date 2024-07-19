import { Typography, Container, Box, Grid, Stack, useMediaQuery, useTheme } from '@mui/material';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaBootstrap, FaLaravel } from 'react-icons/fa';
import { SiFastapi, SiFlutter, SiDocker, SiMysql } from 'react-icons/si';
import Avatar from '../assets/image/avatar.jpg'; // Ensure this path is correct
import { AngularIcon, FlutterIcon, LaravelIcon, MySqlIcon } from '../assets/icon';





function About() {

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const theme = useTheme();

    const skills = [
        { name: 'HTML', icon: <FaHtml5 color="#E34F26" size={40} /> },
        { name: 'CSS', icon: <FaCss3Alt color="#1572B6" size={40} /> },
        { name: 'JavaScript', icon: <FaJs color="#F7DF1E" size={40} /> },
        { name: 'React', icon: <FaReact color="#61DAFB" size={40} /> },
        { name: 'Angular', icon: <img src={AngularIcon} alt="MySQL" style={{ width: 40, height: 40 }} /> },
        { name: 'Flutter', icon: <img src={FlutterIcon} alt="Flutter" style={{ width: 40, height: 40 }} /> }, // ใช้ไอคอน Flutter จาก react-icons
        { name: 'Laravel', icon: <img src={LaravelIcon} alt="Flutter" style={{ width: 40, height: 40 }} /> },
        { name: 'FastAPI', icon: <SiFastapi color="#04988A" size={40} /> }, // ใช้ไอคอน FastAPI จาก react-icons
        { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" size={40} /> },
        // { name: 'Docker', icon: <SiDocker color="#0db7ed" size={40} /> },
        { name: 'MySQL', icon: <img src={MySqlIcon} alt="MySQL" style={{ width: 60, height: 40 }} /> }
    ];

    return (
        <div>
            <Container maxWidth="md" sx={{ padding: 15 }}>
                <div style={{ display: 'inline-flex', flexDirection: "row", alignItems: 'center' }}>

                    <div style={{ display: 'inline-flex', flexDirection: "column", }}>
                        <Typography variant="h2" component="h3" color={theme.palette.primary.main} gutterBottom>
                            About me
                        </Typography>
                        <Typography variant="body1" paragraph color={theme.palette.text.primary} sx={{ textIndent: '1.5em' }}>
                            My name is Wichasin, but you can call me Mak. I’m a 4th-year Computer Science student with a passion for programming. In my free time, I often immerse myself in coding. I am excited about new technologies and my strengths lie in Angular, ReactJS, Flutter, Laravel, and FastAPI. I am eager to apply my skills and enthusiasm to new challenges.

                        </Typography>
                    </div>
                    <img
                        src={Avatar}
                        alt="Profile"
                        width={isMobile ? 250 : 200}
                        height={isMobile ? 250 : 200}
                        style={{
                            borderRadius: '50%',
                            border: `8px solid ${theme.palette.primary.main}`,
                            marginLeft: isMobile ? '0px' : '30px',
                            marginBottom: isMobile ? '20px' : '0px'
                        }}
                    />
                </div>



                <Box my={4}>
                    {/* <Typography variant="h6" gutterBottom>
                        My Interests :
                    </Typography>
                    <Grid container >
                        <ul>
                            <li>Blockchain</li>
                            <li>NLP</li>
                            <li>Web Development</li>

                        </ul>
                    </Grid> */}
                    <Typography variant="h6" gutterBottom color={theme.palette.text.primary}>
                        Use Stacks :
                    </Typography>
                    <Grid container spacing={2}>
                        {skills.map((skill) => (
                            <Grid item xs={4} sm={3} md={2} key={skill.name} textAlign="center">
                                <Stack direction="column" alignItems="center">
                                    {skill.icon}
                                    
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
}

export default About;
