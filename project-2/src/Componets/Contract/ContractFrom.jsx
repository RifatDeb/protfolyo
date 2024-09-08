import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contractfrom.scss'
import { Container, Row, Col } from 'react-bootstrap';
import FromImg from '../../assets/FromImg.png'



    
    const ContractFrome = () => {
      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_fn2bhjh', 'template_pqrwo5h', form.current, {
            publicKey: 'X7sIoz9ldNu_E4O-7',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
      return (
<Container> 
<Row> 
<Col md={12} lg={6} >
<div className="i-body">
<img src={FromImg} alt=" img" className="fromImgs" />
</div>
 
  </Col>
  <Col md={12}  lg={6}>
  <div className='from'>
          
          <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
    
          <label>Subject</label>
          <textarea name="user_subject" />
          
          <label>Message</label>
          <textarea name="user_message" />
    
          <input type="submit" value="Send" />
        </form>
        </div>
  </Col>
</Row>
</Container>

    
      )
    
}

export default ContractFrome
