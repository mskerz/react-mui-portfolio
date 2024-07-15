import React, { useState, useEffect } from 'react';
import Project from './Project';
import { Container, Typography,Grid } from '@mui/material';
import data from './data.json';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data);
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        My Projects
      </Typography>
            <Grid container spacing={2}>
                {projects.map((project, index) => (
                <Grid item xs={12} sm={6} md={6} key={index}>
                    <Project project={project} />
                </Grid>
                ))}
            </Grid>
    </Container>
  );
}

export default ProjectList;
