import React from 'react'
import Hero from '../components/homePageComponent/Hero'
import TrustedBy from '../components/homePageComponent/TrustedBy'
import Services from '../components/homePageComponent/Services'
import About from '../components/homePageComponent/About'
import Why from '../components/homePageComponent/Why'
import Introduction from '../components/homePageComponent/Introduction'
import OurClients from '../components/homePageComponent/OurClients'
import OurClientBottom from '../components/homePageComponent/OurClientBottom'
import Blogs from '../components/homePageComponent/Blogs'
import Questions from '../components/homePageComponent/Questions'
import ManageService from '../components/homePageComponent/ManageService'
import SomeNumbers from '../components/homePageComponent/SomeNumbers'

const Home = () => {
  return (
   <>
    <Hero/>
    <TrustedBy/>
    {/* <Services/> */}
    <About/>
    <Why/>
    <Introduction/>
    <OurClients/>
    {/* <OurClientBottom/> */}
    <Blogs/>
    <Questions/>
    <ManageService/>
    <SomeNumbers/>
   </>
  )
}

export default Home