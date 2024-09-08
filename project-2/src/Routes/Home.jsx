import React from 'react'
import Navigation from '../Componets/Nav-Section/Navigation'
import Hero from '../Componets/Hero-Section/Hero'

import About from './About'
import ContractFrom from '../Componets/Contract/ContractFrom'
import Footer from '../Footer/Footer'
import Pro from '../Componets/project-section/pro'
import Aboutme from '../Componets/About-section/Aboutme'

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
     <Aboutme />
     <Pro />
      <ContractFrom />
      <Footer />
    </>
  )
}

export default Home
