import { Col, Container, Row } from 'react-bootstrap'
import './pro.scss'
import React from 'react'
import Img1 from '../../assets/head.png'
import Img2 from '../../assets/computer.png'
import Img3 from '../../assets/Mobile.png'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Pro = () => {
  return (
    <div className='project-section'>
        <Container>
            <div className="project-body">
                <h2>Project</h2>

                <div className="project-button">
                    <button className='btns' type='button'>Python</button>
                    <button className='btns' type="button">Machine Learning</button>
                </div>
            
            <Row> 
                
                <Col md={4}> 
                <div className="left-part">
                <img className='left-img' src={Img1} alt="head" />
                <img className='left-img' src={Img2} alt="computer" />
                <img className='left-img' src={Img3} alt="mobile" />
                </div>
        
                </Col>


                <Col md={8}>
                <div className="right-part">
                  <div className="card-body">

                  <div className="right-img">
                  <img className='right-imgs' src={Img1} alt="Head" />
                </div>
  
      
        <h3>Content Analyzer</h3>
       
        <p>A robust tool designed for content creators, <br /> bloggers, and writers</p>
        <div className='logo'> <FaGithub   className='git-logo'/>
        </div>
      
                  </div>
               
       
     
                </div>
                </Col>
            </Row>
            </div>
           
        </Container>
      
    </div>
  )
}

export default Pro
