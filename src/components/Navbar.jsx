import { AppBar, Tabs, Tab, Toolbar, Typography, IconButton, Box, Collapse, useTheme, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const location = useLocation();
    const [value, setValue] = useState(location.pathname);
    const [open, setOpen] = useState(false);

    const theme = useTheme();
    const isMobilescreen = useMediaQuery(theme.breakpoints.down('md'))
    useEffect(() => {
        setValue(location.pathname);
    }, [location.pathname])

    const handleChange = (event, value) => {
        setValue(value);
    }

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <AppBar position="static" color="warning" sx={{ background: 'black' }}>
            <Toolbar variant='dense' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Typography variant="h4" component={Link} to="/" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: 'white' } }} >
                        Portfolio
                    </Typography>
                </Box>
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Tabs value={value} onChange={handleChange} aria-label='navigation tabs' TabIndicatorProps={{ style: { backgroundColor: '#00f496' } }}>
                        <Tab label="Home" value="/" component={Link} to="/" sx={{ color: 'white', '&.Mui-selected': { color: '#00DFC0' }, '&:hover': { color: '#00DFC0' } }} />
                        <Tab label="About" value="/about" component={Link} to="/about" sx={{ color: 'white', '&.Mui-selected': { color: '#00DFC0' }, '&:hover': { color: '#00DFC0' } }} />
                        <Tab label="Contact" value="/contact" component={Link} to="/contact" sx={{ color: 'white', '&.Mui-selected': { color: '#00DFC0' }, '&:hover': { color: '#00DFC0' } }} />
                        <Tab label="Projects" value="/projects" component={Link} to="/projects" sx={{ color: 'white', '&.Mui-selected': { color: '#00DFC0' }, '&:hover': { color: '#00DFC0' } }} />
                        <Tab label="Resume" value="/resume" component={Link} to="/resume" sx={{ color: 'white', '&.Mui-selected': { color: '#00DFC0' }, '&:hover': { color: '#00DFC0' } }} />

                    </Tabs>
                </Box>

            </Toolbar>
            {isMobilescreen && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ display:'grid', flexDirection: 'row-reverse', alignItems: 'center', backgroundColor: 'black' }}>
                        <Tabs value={value} onChange={handleChange} aria-label='navigation tabs' orientation="vertical" TabIndicatorProps={{ style: { backgroundColor: '#00DFC0'} }}>
                            <Tab label="Home" value="/" component={Link} to="/" sx={{ color: 'white', '&.Mui-selected': { color: '#00DFC0' }, '&:hover': { color: '#00DFC0' } }} />
                            <Tab label="About" value="/about" component={Link} to="/about" sx={{ color: 'white', '&.Mui-selected': { color: '#00DFC0' }, '&:hover': { color: '#00DFC0' } }} />
                            <Tab label="Contact" value="/contact" component={Link} to="/contact" sx={{ color: 'white', '&.Mui-selected': { color: '#00DFC0' }, '&:hover': { color: '#00DFC0' } }} />
                            <Tab label="Projects" value="/projects" component={Link} to="/projects" sx={{ color: 'white', '&.Mui-selected': { color: '#00DFC0' }, '&:hover': { color: '#00DFC0' } }} />
                            <Tab label="Resume" value="/resume" component={Link} to="/resume" sx={{ color: 'white', '&.Mui-selected': { color: '#00DFC0' }, '&:hover': { color: '#00DFC0' } }} />
                        </Tabs>
                    </Box>
                </Collapse>
            )}
        </AppBar>
    )
}

export default Navbar;
