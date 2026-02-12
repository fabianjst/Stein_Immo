import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  }

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className="header">
      <div className="main-header">
        <div className="container header-content">
          <Link to="/" className="logo">
            <img src="/img/logo_color.svg" alt="Stein Immobilien Logo" className="logo-image" />
          </Link>

          <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
            <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>Startseite</Link>
            <Link to="/angebote" className={`nav-link ${isActive('/angebote')}`} onClick={closeMenu}>Immobilienangebote</Link>
            <Link to="/wertermittlung" className={`nav-link ${isActive('/wertermittlung')}`} onClick={closeMenu}>Wertermittlung</Link>
            <Link to="/referenzen" className={`nav-link ${isActive('/referenzen')}`} onClick={closeMenu}>Referenzen</Link>

            <div className="dropdown-container"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span className={`nav-link dropdown-trigger ${location.pathname.includes('/unternehmen') ? 'active' : ''}`}>
                Unternehmen <ChevronDown size={14} />
              </span>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-inner">
                    <Link to="/unternehmen/leistungen" onClick={closeMenu}>Leistungen</Link>
                    <Link to="/unternehmen/ueber-uns" onClick={closeMenu}>Über uns</Link>
                    <Link to="/unternehmen/team" onClick={closeMenu}>Unser Team</Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/kontakt" className="nav-link btn-contact" onClick={closeMenu}>Kontakt</Link>
          </nav>

          <button className="mobile-toggle" onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
