import React from 'react'
import Hero from './componet/hero/page'
import Navbar from './componet/navbar/page'
import About from './componet/about/page'
import Careers from './componet/careers/page'
import Contact from './componet/contact/page'
import Service from './componet/service/page'
function Home() {
  return (
    <div>
      <Hero/>
      <About />
      <Service />
      <Careers />
      <Contact />
    </div>
  )
}

export default Home