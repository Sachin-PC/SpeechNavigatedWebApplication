import React from 'react'
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './Navbar.css'
import  About  from './pages/About';
import  Home  from './pages/Home';
import  Services  from './pages/Services';
import  Contact  from './pages/Contact';

/**
 * Navbar component
 * This component is used to create a navigation bar and also to render respective pages
 * @returns 
 */

export default function Navbar() {
    return (
        <div>
        <nav style={styles.nav}>
            <div style={styles.logo}>Speech Navigated Browser</div>
            <ul>
                <li>
                    <NavLink to = '/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to = '/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to = '/service'>Services</NavLink>
                </li>
                <li>
                    <NavLink to = '/contact'>Contact</NavLink>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/service' element={<Services/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
        </div>
    )
}

// Inline styles for the Navbar component
const styles = {
    nav: {
        fontSize: "1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#333",
        padding: 10
    },
    logo: {
        color: "#1b4a56",
        fontSize: "2rem",
        whiteSpace: "nowrap",
        cursor: "pointer",
        textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
    },
    navLinks: {
      display: "flex",
      listStyle: "none",
      gap: "1.5rem",
      margin: 0,
      padding: 0,
    },
  };