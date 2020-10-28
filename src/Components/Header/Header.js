import React, { useContext, useState } from 'react';
import './Header.css';
import { Navbar, Nav, Form, FormControl, Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
    <Navbar className="fixed-top">
      <Container>
      <Link to="/"><Image src="Logo.png" className="logo mx-4" /></Link>
        <Form inline>
          <FormControl type="text" id="textColor" placeholder="Search your Destination" className="mr-sm-2" />
        </Form>
        <Nav className="mr-auto">
          <Link to="/" className="mx-3 mt-1 text-light">Home</Link>
          <Link to="/search" className="mx-3 mt-1 text-light">Destination</Link>
          <Link className="mx-3 mt-1 text-light">Blog</Link>
          <Link className="mx-3 mt-1 text-light">Contact</Link>
          { !(loggedInUser.email) ? <Link to="/login"><button type="button" className="btn mx-4">Login</button></Link> : 
            <h4 style={{color: '#fff',border: '1px solid #f1c40f'}}>{loggedInUser.email}</h4>
          }
        </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;