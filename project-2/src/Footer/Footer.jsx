import './footer.scss'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer-section'>
        <Container >
 
                   
             <p className='copyRight'> This Website <samp> &copy; Right Kamrul Hasan Rifat</samp></p>
            
          
        </Container>
    
      
    </div>
  )
}

export default Footer
