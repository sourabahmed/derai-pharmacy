import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const{user, logOut} = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home">Derai-Pharmacy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user.email?<Nav.Link onClick={logOut}>Logout</Nav.Link>:<Nav.Link href="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;