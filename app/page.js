import React from 'react'
import Navbar from './pages/Navbar'
import Hero from './pages/hero'
import Services from './pages/services'
import Reviews from './pages/review'
import Footer from './pages/footer'
import Socials from './pages/socials'


function Page() {
  return (
    <>
     <Navbar />
     <Hero />
     <Socials />
     <Services/>
     <Reviews/>
     <Footer/>
   
    </>
    
  )
}

export default Page