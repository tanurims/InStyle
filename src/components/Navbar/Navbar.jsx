import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import {Link} from 'react-router-dom'
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const BubbleSwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                content: "'🌙'",
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M12 2a10 10 0 0 1 9.53 6.75c-.25.05-.51.09-.77.11A8 8 0 1 0 7 15.3c-.03-.26-.06-.52-.11-.77A10 10 0 0 1 12 2z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "'☀️'",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M6.76 4.84l-1.41-1.41-1.42 1.41 1.41 1.42 1.42-1.42zm10.44-1.42l-1.41 1.41 1.42 1.42 1.41-1.42-1.42-1.41zm0 12.73l-1.41 1.41 1.42 1.42 1.41-1.42-1.42-1.41zM6.76 18.36l-1.41-1.41-1.42 1.41 1.41 1.42 1.42-1.42zM4 13h-3v-2h3v2zm16 0h3v-2h-3v2zm-9-9v-3h-2v3h2zm0 16v3h-2v-3h2z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

const Navbar = () => {
    const [nav, setNav] = useState("home");
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div className={`navbar ${isDarkTheme ? 'dark' : 'light'}`}>
            <img src={assets.logo3} alt="" className='logo' />
            <ul className='navbar-menu'>
                <li onClick={() => setNav("home")} className={nav === "home" ? "active" : ""}><Link to="/">Home</Link></li>
                <li onClick={() => setNav("shop-now")} className={nav === "shop-now" ? "active" : ""}>Shop Now</li>
                <li onClick={() => setNav("about")} className={nav === "about" ? "active" : ""}><Link to='/AboutUs'>About</Link></li>
                <li onClick={() => setNav("contact-us")} className={nav === "contact-us" ? "active" : ""}><Link to="/contactus">Contact Us</Link></li>
            </ul>
            <div className="navbar-right">
                <SearchIcon />
                    <div className="navbar-search-icon">
                    <ShoppingCartIcon />
                        <div className="dot"></div>
                    </div>
                    <button>Sign In</button>
                    <BubbleSwitch
                        checked={isDarkTheme}
                        onChange={toggleTheme}
                        name="themeSwitch"
                        inputProps={{ 'aria-label': 'theme switch' }}
                    />
            </div>
        </div>
    );
}

export default Navbar;
