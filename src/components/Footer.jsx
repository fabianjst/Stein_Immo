import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>STEIN IMMOBILIEN</h3>
                    <p>Ihr zuverlässiger Partner für Immobilien in Bad Kreuznach und Umgebung seit 1996.</p>
                </div>

                <div className="footer-section">
                    <h4>Kontakt</h4>
                    <div className="contact-item">
                        <MapPin size={18} />
                        <span>Am Hintzenböhl 48<br />55545 Bad Kreuznach</span>
                    </div>
                    <div className="contact-item">
                        <Phone size={18} />
                        <a href="tel:+49671840850">+49 671 840 850</a>
                    </div>
                    <div className="contact-item">
                        <Mail size={18} />
                        <a href="mailto:info@stein-immo.de">info@stein-immo.de</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Rechtliches</h4>
                    <ul className="footer-links">
                        <li><Link to="/impressum">Impressum</Link></li>
                        <li><Link to="/datenschutz">Datenschutz</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Folgen Sie uns</h4>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Stein Immobilien. Alle Rechte vorbehalten.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
