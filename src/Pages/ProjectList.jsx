import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import { Container, Typography, Box } from '@mui/material';
import Project from '../components/Project';
import projectData from '../assets/data.json';

const ProjectList = () => {
    const [projects, setProjects] = React.useState([]);
    const theme = useTheme();

    React.useEffect(() => {
        setProjects(projectData);
    }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        appendDots: (dots) => (
            <div
                style={{
                    position: 'absolute',
                    bottom: '10px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <ul style={{ margin: '0', padding: '0', display: 'flex' }}>
                    {dots.map((dot, index) => (
                        <li key={index} style={{ margin: '0 5px' }}>
                            {React.cloneElement(dot, {
                                style: {
                                    color: theme.palette.text.primary, // สีจุดนำทาง
                                },
                            })}
                        </li>
                    ))}
                </ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: theme.palette.text.primary,
                    opacity: i === 0 ? 1 : 0.5,
                }}
            />
        ),
    };

    return (
        <Container sx={{ height: '100vh', overflow: 'hidden' }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ paddingTop: '60px', color: theme.palette.text.primary }}>
                My Projects
            </Typography>
            <Box sx={{ height: 'calc(100vh - 120px)', overflow: 'hidden' }}>
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <div key={index}>
                            <Project project={project} />
                        </div>
                    ))}
                </Slider>
            </Box>
        </Container>
    );
};

export default ProjectList;



// update  Bug : Arrow ไม่ทำงาน