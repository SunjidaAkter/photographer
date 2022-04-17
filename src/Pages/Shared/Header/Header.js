import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png'
import './Header.css'

const Header = () => {
    return (

        <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" >
            <Container>
                <Navbar.Brand href="#home"><img style={{ height: '40px' }} src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='text-dark' as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link className='text-dark' as={Link} to='/checkOut'>Check Out</Nav.Link>
                        <Nav.Link className='text-dark' as={Link} to='/'>Pricing</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link className='text-dark' as={Link} to='/about'>About</Nav.Link>
                        <Nav.Link className='text-dark' eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;