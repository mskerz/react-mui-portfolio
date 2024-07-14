import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ProfileImage from '../assets/avatar.jpg'; // Ensure this path is correct


// Create a theme instance

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        gap: theme.spacing(10), // Adjust the gap between image and text
    },
    image: {
        width: '350px',
        height: '350px',
        borderRadius: '50%', // Make the image circular
        objectFit: 'cover', // Ensure the image fits and doesn't stretch
    },
}));


function About() {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h2" component="h1" gutterBottom>
                About Me
            </Typography>
            <div className={classes.root}>
                <Typography variant="body1" style={{ wordWrap: 'break-word' }}>
                    &nbsp; &nbsp;I am a 4th year student studying in Computer Science, looking for a cooperative education placement as a Frontend Developer or Backend Developer. I’m enthusiastic and ready to learn new things, and I aim to apply the skills and knowledge I&apos;ve learned to real-world work.
                </Typography>
                <img src={ProfileImage} alt="Profile" className={classes.image} />

            </div>
        </>
    );
}

export default About;
