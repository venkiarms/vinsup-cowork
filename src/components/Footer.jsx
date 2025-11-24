import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h2>CoWork</h2>
                        <p>Premium coworking spaces for modern professionals.</p>
                    </div>
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#workspace">Workspace</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#book">Book a Tour</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p><i className="fas fa-map-marker-alt"></i> 123 Innovation Drive, Tech City</p>
                        <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
                        <p><i className="fas fa-envelope"></i> hello@cowork.com</p>
                    </div>
                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 CoWork. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
