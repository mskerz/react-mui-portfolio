import React from 'react';
import { Card, CardContent, Typography, List, ListItem, Link, useTheme, Box } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaBootstrap, FaLaravel } from 'react-icons/fa';
import {  SiDocker, SiPhp,} from 'react-icons/si';
import { FlutterIcon, AngularIcon, SlimIcon, MySqlIcon, PythonIcon,FastapiIcon } from '../assets/icon';

const skillIcons = {
    HTML: <FaHtml5 color="#E34F26" size={40} />,
    CSS: <FaCss3Alt color="#1572B6" size={40} />,
    JavaScript: <FaJs color="#F7DF1E" size={40} />,
    React: <FaReact color="#61DAFB" size={40} />,
    Angular: <img src={AngularIcon} alt="Angular" style={{ width: 40, height: 40 }} />, // ใช้ SVG
    Flutter: <img src={FlutterIcon} alt="Flutter" style={{ width: 40, height: 40 }} />, // ใช้ SVG
    Laravel: <FaLaravel color="#FF2D20" size={40} />,
    FastAPI: <img src={FastapiIcon}  alt="Flutter" style={{ width: 40, height: 40 }} />,
    PHP: <SiPhp color='#7277AD' size={40} />,
    Bootstrap: <FaBootstrap color="#7952B3" size={40} />,
    Docker: <SiDocker color="#0db7ed" size={40} />,
    MySQL: <img src={MySqlIcon} alt="MySQL" style={{ width: 60, height: 60 }} />,
    Python: <img src={PythonIcon} alt="Python" style={{ width: 70, height: 70 }} />,
    Slim: <img src={SlimIcon} alt="Slim PHP" style={{ width: 40, height: 40, borderRadius: 10 }} />
};

function Project({ project }) {
    const theme = useTheme();

    return (
        <Card variant="outlined" sx={{ mb: 2, position: 'relative', height: { xs: 'auto', md: '300px' }, width: '100%', display: 'flex', flexDirection: 'column',  }}>
            {project.source && (
                <Box sx={{ position: 'absolute', top: 0, right: 0, p: 1 }}>
                    <Link href={project.source} target="_blank" rel="noopener noreferrer">
                        <GitHub />
                    </Link>
                </Box>
            )}
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" sx={{ color: theme.palette.primary.main }}>
                    {project.projectName}
                </Typography>
                <Typography color="text.secondary">
                    {project.type} - {project.subject}
                </Typography>
                <Typography variant="body2" component="p" sx={{ mt: 2 }}>
                    {project.detail.summary}
                </Typography>
                <b>Tools:</b>
                <Typography variant="body2" component="div" sx={{ mt: 2 }}>
                    <List sx={{ display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        {project.detail.tools.map((tool, index) => (
                            <ListItem key={index} sx={{ width: 'auto' }}>
                                {skillIcons[tool] || tool} {/* Fallback to text if icon is not defined */}
                            </ListItem>
                        ))}
                        {project.detail.database.map((db, index) => (
                            <ListItem key={index} sx={{ width: 'auto' }}>
                                {skillIcons[db] || db} {/* Fallback to text if icon is not defined */}
                            </ListItem>
                        ))}
                    </List>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Project;
