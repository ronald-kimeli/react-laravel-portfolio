import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-secondary sticky-top shadow">
      <Container fluid>
        <Navbar.Brand><NavLink to="/" className='btn btn-about'>Ronald Kimeli</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/" className='btn btn-about'> Home </NavLink>
            <NavLink to="/about" className='btn btn-about'> About </NavLink>
            <NavLink to="/skills" className='btn btn-about'> Skills </NavLink>
            {/* <NavLink to="/services" className='btn btn-about'> Services </NavLink>
            <NavLink to="/projects" className='btn btn-about'> Projects </NavLink> */}
            <NavLink to="/resume" className='btn btn-about'> Resume </NavLink>
            <NavLink to="/contact" className='btn btn-about'> Contact </NavLink>
          </Nav>
          <div className="d-grid gap-1 d-md-flex justify-content-md-end">
            <NavLink to="https://www.linkedin.com/in/ronald-kimeli" className="btn me-md-2 site-link"><i className="bi bi-linkedin"/></NavLink>
            <NavLink to={'https://github.com/ronald-kimeli'} className="btn site-link"><i className="bi bi-git" /></NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
