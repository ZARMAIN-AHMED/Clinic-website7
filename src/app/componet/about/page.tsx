import React from 'react'
import Image from 'next/image';
function About() {
  return (
    <div className="bg-cover bg-center md:w-" style={{ backgroundImage: "url('/bac.jpg')" }}>
      <section className="text-gray-400  body-font bg-gradient-to-l   ">
        <h1 className=' md:pt-10 text-4xl text-center text-gray-800 font-bold font-serif'>ABOUT CLINIC</h1>
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
    <Image
          src={'/icon.jpg'}
          alt='logo'
          height={100}
          width={400}
          className='rounded-full'
          ></Image><br/>
          <p className='text-gray-800 font-bold shadow-5xl border-4 '> Hassan health care clinic one of the leading private clinic in Karachi,
             has always put patients first, and looked to provide
              ease and convenience for them. By launching online services,
              Hassan health care clinic reaffirms its commitment to serving patients first.
                You can now avail these services from the comfort of your home, which is
                 important during the critical times the whole world is going through.</p>
    </div>
    <div className="flex flex-col flex-wrap lg:pt-0 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5">
        <Image
        src={'/logo.jpg'}
        alt='pic'
        height={50}
        width={50}
        className='rounded-full'
        ></Image>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-800 text-4xl font-bold title-font  mb-3">
            +200
          </h2>
          <p className="leading-relaxed text-slate-200 bg-sky-500  rounded-full md:w-40 text-center text-3xl font-bold ">
           Clinics
          </p>
          
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5">
        <Image
        src={'/logo.jpg'}
        alt='pic'
        height={50}
        width={50}
        className='rounded-full'
        ></Image>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-800 font-bold text-4xl title-font  mb-3">
         +450
          </h2>
          <p className="leading-relaxed text-slate-200 bg-sky-500  rounded-full md:w-40 text-center text-3xl font-bold ">
            Doctors
          </p>
         
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5">
         
        <Image
        src={'/logo.jpg'}
        alt='pic'
        height={50}
        width={50}
        className='rounded-full'
        ></Image>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-800 text-5xl title-font font-bold mb-3">
    24 
          </h2>
          <p className="leading-relaxed   bg-sky-500  rounded-full md:w-60 text-center text-slate-200 text-3xl font-bold ">
           Hours Open
          </p>
        
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default About