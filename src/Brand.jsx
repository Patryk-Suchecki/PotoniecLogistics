import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext, useTranslation } from './LanguageContext';

import Logo from './img/logo.png'
import English from './img/English.png'
import Polish from './img/Polish.png'

import './style/Brand.css'

function Brand() {
  const [isSticky, setIsSticky] = useState(false);
  const { translate } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarStyle = {
    top: isSticky ? '0' : '',
    position: isSticky ? 'fixed' : '',
    width: isSticky ? '100%' : '',
    zIndex: isSticky ? '999' : '',
    boxShadow: isSticky ? '0px 13px 50px 5px rgba(0,0,0,0.2)' : '',
    backgroundColor: isSticky ? 'white' : '',
  };
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  const handleClick = () => {
    const element = document.getElementById('form');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="empty"></div>
      <Navbar expand="lg" style={navbarStyle}>
          <Container>
            <Navbar.Brand><img src={Logo} height="50" alt="Logo"/></Navbar.Brand>
              <Nav className="ms-auto">
                <NavDropdown title={<img src={language === 'en' ? English : Polish} height="50" alt="English"/>} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => handleLanguageChange({ target: { value: 'en' } })}><img src={English} height="50" alt="English"/> {translate('english')}</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleLanguageChange({ target: { value: 'pl' } })}><img src={Polish} height="50" alt="Polish"/> {translate('polish')}</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <button className="contact-btn" onClick={handleClick} >{translate('contact')}</button>
          </Container>
        </Navbar>
    </>
  );
}
export default Brand;