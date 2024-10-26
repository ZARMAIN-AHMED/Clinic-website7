'use client'


import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
function Hero() {
  return (
    <div className=" bg-cover bg-center pt-5 "style={{ backgroundImage: "url('/bn.jpg')" }}>
 <section className="bg-gradient-to-r to-white... md:h-screen ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-5xl text-3xl mb-4 font-serif text-white">
      
      
Protecting 
<br/>
<Typewriter
  options={{
    strings: ['You 🩺', ' And  Your Family'],
    autoStart: true,
    loop: true,
  }}
/>  
      </h1>
      <p className="mb-5 leading-relaxed sm:text-3xl text-cyan-500 font-bold">
       Your Health And Wellbeing Is <br/> Important For Us.
      </p>
      <p className='font-bold text-sky-100 '>
Hassan health care clinic Medical Center is the best  healthcare center in karachi,  
a <br/>highly reputable  acclaimed healthcare group <br/>
based in Pakistan. Our mission has remained focused on improving our community’s<br/>
 health and quality of life, as well as caring for our patients 
in extraordinary ways through the methods <br/>we choose to operate by and deliver our services.</p><br/>
      <div className="flex justify-center">
      <a href='/componet/about'>
        <button className="transition ease-in-out delay-150 font-bold bg-sky-600 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-600 -600-500 duration-300 ... ml-4 inline-flex text-white  border-0 py-2 px-6 focus:outline-none  hover:text-white rounded text-lg">
          View More
        </button></a>
      </div>
      
    </div >
   
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
     
      
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero