import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { navLinks, socialLinks } from '../storeData/linksData';

function Header() {
    const [expanded, setExpanded] = useState(false);

    const handleNavLinkClick = () => {
        if (expanded) {
            setExpanded(false);
        }
    };

    return (
        <Navbar expand="lg" className="bg-body-secondary sticky-top shadow" expanded={expanded}>
            <Container fluid>
                <Navbar.Brand>
                    <NavLink to="/" className='btn btn-about' onClick={handleNavLinkClick}>Ronald Kimeli</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {navLinks.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.to}
                                className='btn btn-about'
                                onClick={handleNavLinkClick}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </Nav>
                    <div className="d-grid gap-1 d-md-flex justify-content-md-end">
                        {socialLinks.map((social, index) => (
                            <NavLink
                                key={index}
                                to={social.to}
                                className="btn site-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleNavLinkClick}
                            >
                                <i className={social.icon} />
                            </NavLink>
                        ))}
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;


