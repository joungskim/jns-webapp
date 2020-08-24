import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

//TODO: Change this later to take in all of the navbar elements as props so that the navbar will be dynamic.
//Generate navbar links dynamically as well as the image html as props instead of static image saved locally.
const Header = ({onRouteChange}) => {
    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="light" variant="light">
            <Navbar.Brand onClick={() => onRouteChange('Resume')}>JS Realtor</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => onRouteChange('Home')}>Home</Nav.Link>
                    <Nav.Link onClick={() => onRouteChange('Rentals')}>Properties</Nav.Link>
                    <Nav.Link onClick={() => onRouteChange('Contact')}>Contact</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link onClick={() => onRouteChange('Login')}>Login</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link onClick={() => onRouteChange('Register')}>Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header