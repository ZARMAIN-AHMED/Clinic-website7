import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCamera } from 'react-icons/fa';
function Navbar() {
  return (
    <div><header className="text-gray-400 bg-gradient-to-r from-cyan-500 to-white... body-font  ">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <span
          className=" rounded-full">
          <Image
          src={'/logoo.jpg'}
          alt='logo'
          height={100}
          width={50}
          className='rounded-full'
          ></Image>
        </span>
        <span className="ml-3  font-bold text-2xl"><p className='text-sky-700  inline-flex font-black '>HASSAN </p> HEALTH CARE CLINIC</span>
      </a>
      <div className="md:mr-auto md:ml-40 md:py-1 md:pl-4 md:border-l	flex flex-wrap font-bold items-center text-base justify-center  ">
        <Link  href={'/componet/hero'} className="mr-5 hover:text-sky-600 text-2xl text-white">Home</Link>
        <Link href={'/componet/about'}   className="mr-5 hover:text-sky-600 text-2xl  text-white">About</Link>
        <Link href={'/componet/service'}  className="mr-5 hover:text-sky-600 text-2xl text-white">Service</Link>
        < Link href={'/componet/careers'}  className="mr-5 hover:text-sky-600 text-2xl  text-white">Careers</Link>
        <Link href={'/componet/contact'}  className="mr-5 hover:text-sky-600 text-2xl text-white">Contac Us</Link>
      </div>
     


      <div className="flex justify-center">
  <Link href={'/componet/service'}>
        <button className="transition ease-in-out  font-bold bg-sky-500 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-600 -600-500 duration-300 ... ml-4 inline-flex text-white  border-0 py-2 px-6 focus:outline-none  hover:text-white rounded text-lg">
          Our Services
        </button></Link>
      </div>
    </div>
  </header>
  
  </div>
  )
}

export default Navbar