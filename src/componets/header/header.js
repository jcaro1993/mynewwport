import React from 'react'
import './header.css'
import {Navbar, Nav, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function header() {
    return (
        <div className="Header">
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Javier Caro</Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
        <Form inline>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/projects">My Projects</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        </Form>
        </Navbar>
        <br />
         </div>
)
}

export default header
