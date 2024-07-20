import React, { useState, useEffect } from 'react';
import Project from '../components/Project';
import { Container, Typography, Grid, useTheme } from '@mui/material';
import project from '../assets/data.json';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(5), // Adjust the gap between image and text
    flexDirection: 'column', // For mobile layout
  },
 
}));

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    setProjects(project);
  }, []);

  return (
    <Container className={classes.root}>
      <Typography variant="h4" component="h1"  gutterBottom sx={{paddingTop:'60px',color:theme.palette.text.primary}}>
        My Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={6} key={index} >
            <Project project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProjectList;
