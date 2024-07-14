
import { AppBar, Tabs, Tab, Toolbar } from '@mui/material';
import { red } from '@mui/material/colors';
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
        <AppBar>
            <Toolbar>
                <Tabs value={value} onChange={handleChange} aria-label='navigation tabs' style={{color:red}}>
                        <Tab label="Home" value="/" component={Link} to="/" />
                        <Tab label="About" value="/about" component={Link} to="/about" />
                        <Tab label="Contact" value="/contact" component={Link} to="/contact" />
                </Tabs>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar