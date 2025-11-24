import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="logo">
                    <a href="#">CoWork</a>
                </div>
                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#workspace" className="nav-link" onClick={() => setIsOpen(false)}>Workspace</a>
                    </li>
                    <li className="nav-item">
                        <a href="#features" className="nav-link" onClick={() => setIsOpen(false)}>Features</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="#book" className="btn nav-btn" onClick={() => setIsOpen(false)}>Book a Tour</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
