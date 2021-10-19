import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const{user, logOut} = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
            <Container>
                <Navbar.Brand href="#home">Derai-Pharmacy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link className="text-decoration-none text-dark" to="/home">Home</Link></Nav.Link>
                        <Nav.Link><Link className="text-decoration-none text-dark" to="/covid">Covid-19</Link></Nav.Link>
                        <Nav.Link><Link className="text-decoration-none text-dark" to="/doctor">Online-Doctor</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        
                            <h5>Sign in as: {user?.displayName}</h5>
                        
                        {
                            user.email?<button onClick={logOut} className="btn btn-danger">Logout</button>:
                            <button className="btn btn-danger"><Link className="text-decoration-none text-white" to="/login">Login</Link></button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;