
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
            <Toolbar variant='dense' sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Typography variant="h6" component="div">
                        Portfolio
                    </Typography>
                </div>
                <Tabs value={value} onChange={handleChange} aria-label='navigation tabs'>
                    <Tab label="Home" value="/" color="secondary" component={Link} to="/" sx={{ color: 'white', marginRight: '20px' }} />
                    <Tab label="About" value="/about" color="primary" component={Link} to="/about" sx={{ color: 'white', marginRight: '20px' }} />
                    <Tab label="Contact" value="/contact" color="primary" component={Link} to="/contact" sx={{ color: 'white', marginRight: '20px' }} />
                </Tabs>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
