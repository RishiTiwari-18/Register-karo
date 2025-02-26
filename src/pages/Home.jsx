import React from 'react'
import Hero from '../components/homePageComponent/Hero'
import TrustedBy from '../components/homePageComponent/TrustedBy'
import Services from '../components/homePageComponent/Services'
import About from '../components/homePageComponent/About'
import Why from '../components/homePageComponent/Why'
import Introduction from '../components/homePageComponent/Introduction'

const Home = () => {
  return (
   <>
    <Hero/>
    <TrustedBy/>
    <Services/>
    <About/>
    <Why/>
    <Introduction/>
   </>
  )
}

export default Home