import React from 'react'
import Image from 'next/image'
function Service() {
  return (
    <div>

<div id="services" className="p-10  h-screen  bg-contain bg-center md:w-full" style={{ backgroundImage: "url('/back.jpg')" }}>
    

  <title>Clinic Services</title>
  <header className="text-center py-10">
    <h1 className="text-5xl font-bold text-sky-600">Welcome to Our Clinic</h1>
  </header>
  <section  className="py-10">
    <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
    <div className="flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-10 md:justify-center">
      <div className="bg-white md:w-auto text-center shadow-lg  rounded-lg p-6 flex flex-col items-center transition-transform hover:scale-105 duration-300">
        
      <Image
          src="/logo.jpg"
          alt="Pediatrics"
          className="mb-4"
          height={50}
          width={50}
        />
        <h3 className="text-2xl font-semibold text-blue-600">
          General Consultation
        </h3>
        <p className="text-gray-600 text-center mt-2">
          Comprehensive health assessments and consultations.
        </p>
        
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform hover:scale-105 duration-300">
        <Image
          src="/logo.jpg"
          alt="Pediatrics"
          className="mb-4"
          height={50}
          width={50}
        />
        <h3 className="text-2xl font-semibold text-green-600">Pediatrics</h3>
        <p className="text-gray-600 text-center mt-2">
          Specialized care for children and adolescents.
        </p>
        
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform hover:scale-105 duration-300">
      <Image
          src="/logo.jpg"
          alt="Pediatrics"
          className="mb-4"
          height={50}
          width={50}
        />
        <h3 className="text-2xl font-semibold text-pink-600">Dermatology</h3>
        <p className="text-gray-600 text-center mt-2">
          Expert care for skin conditions and concerns.
        </p>
       
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform hover:scale-105 duration-300">
      <Image
          src="/logo.jpg"
          alt="Pediatrics"
          className="mb-4"
          height={50}
          width={50}
        />
        <h3 className="text-2xl font-semibold text-yellow-600">Dental Care</h3>
        <p className="text-gray-600 text-center mt-2">
          Complete dental care for you and your family.
        </p>
        
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform hover:scale-105 duration-300">
      <Image
          src="/logo.jpg"
          alt="Pediatrics"
          className="mb-4"
          height={50}
          width={50}
        />
        <h3 className="text-2xl font-semibold text-red-600">Cardiology</h3>
        <p className="text-gray-600 text-center mt-2">
          Comprehensive heart health evaluations and <br/>treatments.
        </p>
       
      </div>
      <div className="bg-white shadow-lg text-center rounded-lg p-6 flex flex-col items-center transition-transform hover:scale-105 duration-300">
      <Image
          src="/logo.jpg"
          alt="Pediatrics"
          className="mb-4"
          height={50}
          width={50}
        />
        <h3 className="text-2xl font-semibold text-purple-600">
          Nutrition Counseling
        </h3>
        <p className="text-gray-600 text-center mt-2">
          Personalized nutrition plans to  improve health.
        </p>
        
      </div>
    </div>
  </section>
  <footer className="text-center py-10">
    <p className="text-gray-600">© 2024 Hassan Health Care Clinic and Medical . All Rights Reserved.</p>
  </footer>


  
</div>
        
    </div>
  )
}

export default Service