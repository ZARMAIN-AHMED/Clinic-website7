'use client'
import React from 'react'

function Careers() {
  return (
    <div className="bg-cover" style={{ backgroundImage: "url('/back.jpg')" }}>
      <section className="text-gray-200 body-font bg-gradient-to-b from-cyan-600">
        <div className="container px-5 py-24 mx-auto">
          <h1 className='text-3xl md:text-5xl text-white font-sans font-bold text-center'>
            LOOKING FOR A JOB
          </h1>
          <p className='text-xl md:text-3xl text-white font-bold text-center'>
            please apply at careers@hassanclinic@gmail.com or contact to HR at 02-087665419.
          </p>
          <br />
          <div className="xl:w-1/2 lg:w-3/4 w-full md:mx-auto pl-4 md:pl-9 text-center text-cyan-950 font-serif font-bold bg-cyan-500 rounded-lg p-6">
            <br />
            <h1 className='text-3xl md:text-4xl'>INSTRUCTIONS</h1>
            <h1 className='text-2xl md:text-3xl font-bold'>WAYS TO BEAT THE HEAT</h1>
            <br />
            <p className="leading-relaxed text-lg md:text-2xl text-left">
              1) STAY HYDRATE: By drinking lots of water.<br />
              2) DRINK: Lemonade, Lassi, ORS, and beverages rich in electrolytes.<br />
              3) AVOID: Heavy physical activity.<br />
              4) DONT: Go out in the sun without sunscreen on.<br />
              5) KEEP: Yourself cool by taking a cold shower.<br />
              6) Cool your car down quickly.<br />
              7) CONSUME: Fresh fruits and vegetables.<br />
              8) WEAR: Light-colored and loose clothing.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-cyan-800 mt-8 mb-6" />
            <h2 className="text-white font-medium title-font tracking-wider text-sm"></h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers
