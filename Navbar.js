import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './Header.css'; // Include the CSS file for styling

function Navbar() {
  return (
    <div>
      <Navbar variant='dark' expand='lg' className='navbar p-4'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            MegaMart
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Row className="w-100">
              <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-center">
                <Nav>
                  <Nav.Link as={Link} to='/'>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to='/product'>
                    Product
                  </Nav.Link>
                  <Nav.Link as={Link} to='/contact'>
                    Contact
                  </Nav.Link>
                  <Nav.Link as={Link} to='/about'>
                    About
                  </Nav.Link>
                </Nav>
              </Col>
              <Col xs={12} md={4} className="d-flex justify-content-end">
                <Nav>
                  <Nav.Link as={Link} to='/signin'>
                    SignIn Here
                  </Nav.Link>
                  <Navbar.Text>||</Navbar.Text>
                  <Nav.Link as={Link} to='/signup'>
                    SignUp Here
                  </Nav.Link>
                </Nav>
              </Col>
              <Col xs={12} md={4} className="d-flex justify-content-end">
                <Nav.Link as={Link} to='/cart'>
                  <ShoppingCart size={32} className='shopping-cart-icon' />
                </Nav.Link>
              </Col>
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar;
