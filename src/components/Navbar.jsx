import { AppBar, Tabs, Tab, Toolbar, Typography, IconButton, Box, Collapse, useTheme, useMediaQuery, Switch } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useThemeContext } from '../provider/ThemeContext';



const Logo = '< Portfolio />'
function Navbar() {
    const location = useLocation();
    const [value, setValue] = useState(location.pathname);
    const [open, setOpen] = useState(false);
    const { darkMode, toggleTheme } = useThemeContext(); // hook theme 

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
        <AppBar position="static" sx={{ background: theme.palette.background.default , boxShadow: 'none'}}>
            <Toolbar variant='dense' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Typography variant="h4" component={Link} to="/" sx={{ color: theme.palette.text.primary, textDecoration: 'none', '&:hover': { color: theme.palette.text.primary } }} >
                        {Logo}
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
                    <Tabs value={value}
                        onChange={handleChange}
                        aria-label='navigation tabs'
                        TabIndicatorProps={{ style: { backgroundColor: theme.palette.primary.main } }}
                    >
                        <Tab label="Home" value="/" component={Link} to="/" sx={{ color: theme.palette.text.primary,  '&.Mui-selected': { color: theme.palette.primary.main }, '&:hover': { color: theme.palette.secondary.main }}}/>
                        <Tab label="About"  value="/about" component={Link} to="/about" sx={{ color: theme.palette.text.primary, '&.Mui-selected': { color: theme.palette.primary.main }, '&:hover': { color: theme.palette.secondary.main }}}  />
                        <Tab label="Contact" value="/contact" component={Link} to="/contact" sx={{  color: theme.palette.text.primary,  '&.Mui-selected': { color: theme.palette.primary.main },'&:hover': { color: theme.palette.secondary.main }}} />
                        <Tab label="Projects"  value="/projects"  component={Link}  to="/projects" sx={{  color: theme.palette.text.primary,  '&.Mui-selected': { color: theme.palette.primary.main },'&:hover': { color: theme.palette.secondary.main }}} />
                        <Tab label="Resume"  value="/resume" component={Link} to="/resume" sx={{ color: theme.palette.text.primary, '&.Mui-selected': { color: theme.palette.primary.main },  '&:hover': { color: theme.palette.secondary.main }  }} />
                    </Tabs>
                </Box>
                <Switch checked={darkMode} onChange={toggleTheme} sx={{
                    '& .MuiSwitch-switchBase': {
                        color: theme.palette.primary.main,
                        '&.Mui-checked': {
                            color: theme.palette.primary.main,
                        },
                        '&.Mui-checked + .MuiSwitch-track': {
                            backgroundColor: theme.palette.primary.main,
                        },
                    },
                    '& .MuiSwitch-track': {
                        backgroundColor: theme.palette.primary.main,
                    },
                }} />

            </Toolbar>
            {isMobilescreen && (
                <Collapse in={open} timeout="auto" unmountOnExit sx={{backgroundColor:theme.palette.background.default}}>
                    <Box sx={{ display: 'grid', flexDirection: 'row-reverse', alignItems: 'center', backgroundColor: theme.palette.background.default}}>
                        <Tabs value={value} onChange={handleChange} aria-label='navigation tabs' orientation="vertical" TabIndicatorProps={{ style: { backgroundColor: theme.palette.primary.main } }}>
                            <Tab label="Home" value="/" component={Link} to="/" sx={{ color: theme.palette.text.primary, '&.Mui-selected': { color: theme.palette.primary.main }, '&:hover': { color: theme.palette.secondary.main }}} />
                            <Tab label="About" value="/about" component={Link} to="/about" sx={{ color: theme.palette.text.primary, '&.Mui-selected': { color: theme.palette.primary.main }, '&:hover': { color: theme.palette.secondary.main }}} />
                            <Tab label="Contact" value="/contact" component={Link} to="/contact" sx={{ color: theme.palette.text.primary, '&.Mui-selected': { color: theme.palette.primary.main }, '&:hover': { color: theme.palette.secondary.main }}} />
                            <Tab label="Projects" value="/projects" component={Link} to="/projects" sx={{ color: theme.palette.text.primary, '&.Mui-selected': { color: theme.palette.primary.main }, '&:hover': { color: theme.palette.secondary.main }}} />
                            <Tab label="Resume" value="/resume" component={Link} to="/resume" sx={{ color: theme.palette.text.primary, '&.Mui-selected': { color: theme.palette.primary.main }, '&:hover': { color: theme.palette.secondary.main }}} />
                        </Tabs>
                    </Box>
                </Collapse>
            )}
        </AppBar>
    )
}

export default Navbar;
