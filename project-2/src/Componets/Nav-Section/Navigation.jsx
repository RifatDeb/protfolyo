import { Col, Container, Row} from 'react-bootstrap';
import './navigation.scss'
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link} from 'react-router-dom';


const Navigation = () => {
  return (
    <>
    <Container>
      <Row>
        <Col>
        <Navbar   expand='md'>
    <Container>
      
    <Navbar.Brand>Rifat Dev</Navbar.Brand>
     
      <Navbar.Toggle aria-controls="responsive" className='hembergar' />
      <Navbar.Collapse id="responsive">
      <Nav className=' ms-auto nav-li'>

          <Nav.Link className='link' as={Link} to={"/"}> Home</Nav.Link>
          <Nav.Link className='link' as={Link} to={"/About"}> About</Nav.Link>
          <Nav.Link  className='link'as={Link} to={"/Contract"}> Cantract</Nav.Link>
          <Nav.Link className='link' as={Link} to={"/Projects"}> Projects</Nav.Link>
   
       
     

      </Nav>
      </Navbar.Collapse>
      
     

    </Container>
  </Navbar>
        </Col>
      </Row>

    </Container>
    </>
   
  )
}

export default Navigation
