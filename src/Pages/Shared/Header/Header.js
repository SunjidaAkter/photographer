import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png'
import './Header.css'
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (

        <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" >
            <Container>
                <Navbar.Brand href="#home"><img style={{ height: '40px' }} src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='text-dark' as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link className='text-dark' as={Link} to='/home#services'>Services</Nav.Link>
                        <Nav.Link className='text-dark' as={Link} to='/'>Pricing</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link className='text-dark' as={Link} to='/about'>About</Nav.Link>
                        {
                            user ?
                                <button className='btn btn-link text-dark text-decoration-none' onClick={handleSignOut}>sign out</button>
                                :
                                <Nav.Link as={Link} to="logIn">
                                    Login
                                </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;