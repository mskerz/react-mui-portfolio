
import { AppBar, Tabs, Tab, Toolbar,Typography} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const [value, setValue] = useState(location.pathname);



    useEffect(()=>{
        setValue(location.pathname);
    }, [location.pathname])


    const handleChange = (event,value) => {
        setValue(value);
    }


    return (
        <AppBar position="static" color="warning"  sx={{ color: 'white'  }} >
            <Toolbar variant='dense' sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Typography variant="h4" component="div">
                        Portfolio
                    </Typography>
                </div>
                <Tabs value={value} onChange={handleChange} aria-label='navigation tabs'>
                    <Tab label="Home" value="/" color="secondary" component={Link} to="/" sx={{ color: 'white' }} />
                    <Tab label="About" value="/about" color="primary" component={Link} to="/about" sx={{ color: 'white'}} />
                    <Tab label="Contact" value="/contact" color="primary" component={Link} to="/contact" sx={{ color: 'white' }} />
                    <Tab label="Projects" value="/projects" color="primary" component={Link} to="/projects" sx={{ color: 'white' }} />

                </Tabs>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
