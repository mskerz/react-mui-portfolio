import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Link, useTheme } from '@mui/material';

function Project({ project }) {
    const theme = useTheme();
    return (
        <Card variant="outlined" sx={{ mb: 2, backgroundColor: theme.palette.background.paper }}>
            <CardContent>
                <Typography variant="h6" component="div" sx={{ color: theme.palette.primary.main }}>
                    {project.projectName}
                </Typography>
                <Typography color="text.secondary">
                    {project.type} - {project.subject}
                </Typography>
                <Typography variant="body2" component="p" sx={{ mt: 2 }}>
                    {project.detail.summary}
                </Typography>
                <Typography variant="body2" component="div" sx={{ mt: 2 }}>
                    <b>Tools:</b>
                    <List>
                        {project.detail.tools.map((tool, index) => (
                            <ListItem key={index} sx={{ padding: 0 }}>
                                <ListItemText primary={tool} />
                            </ListItem>
                        ))}
                    </List>
                </Typography>
                <Typography variant="body2" component="div" sx={{ mt: 2 }}>
                    <b>Database:</b>
                    <List>
                        {project.detail.database.map((db, index) => (
                            <ListItem key={index} sx={{ padding: 0 }}>
                                <ListItemText primary={db} />
                            </ListItem>
                        ))}
                    </List>
                </Typography>
                {project.source && (
                    <Typography variant="body2" component="div" sx={{ mt: 2 }}>
                        <Link href={project.source} target="_blank" rel="noopener noreferrer">
                            Project Source
                        </Link>
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
}

export default Project;
