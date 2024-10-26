import React from 'react'
import Image from 'next/image'

function Service() {
  return (
    <div id="services" className="p-5 md:p-10 h-auto md:h-screen bg-contain bg-center md:w-full" style={{ backgroundImage: "url('/back.jpg')" }}>
      <title>Clinic Services</title>
      <header className="text-center py-10">
        <h1 className="text-3xl md:text-5xl font-bold text-sky-600">Welcome to Our Clinic</h1>
      </header>
      <section className="py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Services</h2>
        <div className="flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-10 md:justify-center">
          {[
            {
              title: 'General Consultation',
              description: 'Comprehensive health assessments and consultations.',
              color: 'text-blue-600',
            },
            {
              title: 'Pediatrics',
              description: 'Specialized care for children and adolescents.',
              color: 'text-green-600',
            },
            {
              title: 'Dermatology',
              description: 'Expert care for skin conditions and concerns.',
              color: 'text-pink-600',
            },
            {
              title: 'Dental Care',
              description: 'Complete dental care for you and your family.',
              color: 'text-yellow-600',
            },
            {
              title: 'Cardiology',
              description: 'Comprehensive heart health evaluations and treatments.',
              color: 'text-red-600',
            },
            {
              title: 'Nutrition Counseling',
              description: 'Personalized nutrition plans to improve health.',
              color: 'text-purple-600',
            },
          ].map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform hover:scale-105 duration-300">
              <Image
                src="/logo.jpg"
                alt={service.title}
                className="mb-4"
                height={50}
                width={50}
              />
              <h3 className={`text-2xl font-semibold ${service.color}`}>{service.title}</h3>
              <p className="text-gray-600 text-center mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="text-center py-10">
        <p className="text-gray-600">© 2024 Hassan Health Care Clinic and Medical. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Service
