
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { StyledNavbar} from './HeaderStyles'


const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

  return (
    <StyledNavbar expand="lg" variant="dark" className={scrolled ? 'rolado' : ''}>
      <div className="container-fluid main-header">
      <Navbar.Brand className='navbar-brand' href="#">
        <span className="tag">&lt;</span>
        <span className="tag">/</span>
        <span className="tag-name">Alisson Martins</span>
        <span className="tag">&gt;</span>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" className='icon-button ' />
        <Navbar.Collapse id="navbarNav" className='navbar '>
            <Nav className="navbar-nav ">
              <Nav.Item className='colapse-menu'>
                <Nav.Link href="" className="nav-link" aria-current="page">Home</Nav.Link>
              </Nav.Item>
                <Nav.Item className='colapse-menu'>
                  <Nav.Link href="" className="nav-link">Features</Nav.Link>
                </Nav.Item>
                <Nav.Item className='colapse-menu'>
                  <Nav.Link href="" className="nav-link">Pricing</Nav.Link>
                </Nav.Item>
                <Nav.Item className='colapse-menu'>
                  <Nav.Link href="" className="nav-link " aria-disabled="false">Projects</Nav.Link>
                </Nav.Item>   
            </Nav>
        </Navbar.Collapse>
      </div>
    </StyledNavbar>

  );
};

export default Header;
