import './aboutme.scss'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutImg from '../../assets/aboutImg.png'

const Aboutme = () => {
  return (
    <div className='about-me'>
<Container>
    <Row>

        <Col md={6}>
        <div className="img-body"> 
             <img  className="about-img" src={aboutImg} alt=" img" />
        </div>
      
        </Col>
        <Col md={6}>
        <h2>About me</h2>
        <p>I am actively seeking opportunities to apply my acquired skills and knowledge to real-world projects.
             My educational background has equipped me with a solid foundation in AI and ML algorithms, data analysis,
              and programming languages such as Python. Additionally, 
            I have gained practical experience through hands-on projects, both independently and collaboratively.</p>
        </Col>
    

    </Row>
</Container>
      
      
    </div>
  )
}

export default Aboutme
