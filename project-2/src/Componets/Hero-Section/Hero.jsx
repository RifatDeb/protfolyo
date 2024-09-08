import './hero.scss'
import React from 'react'
import pic from '../../assets/heroImg.png'

const Hero = () => {
    return (
        <div className='hero-section'>
            <div className="hero-img">
                <img src={pic} alt=" hero img" />
            </div>

            <div className="hero-dess">
                <h5>H ey</h5>
                <h1>I’m Priti Jadhav</h1>
                <h4>Machine Learning <samp>  Engineer .</samp></h4>

                <p>A highly motivated student studying Artificial Intelligence and <br />
                Machine Learning. Actively seeking opportunities to apply my <br /> 
                skills and knowledge to real-world projects and contribute to  <br />
                the advancement of the 
                industry. </p>

                </div>
            <div >
                <button className='hero-button btns' > Learn More</button>
                <button className='hero-button btns'>Contact me</button>
            </div>

        </div>
    )
}     

export default Hero
