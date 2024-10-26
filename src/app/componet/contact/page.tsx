import React from 'react'

function Contact() {
  return (
    <div>
<section className="text-white  body-font relative   bg-gradient-to-t from-cyan-500 to-white.. ">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-extrabold title-font mb-4 text-cyan-800">
        Contact Us
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
   
       
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm font-bold text-cyan-800">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-cyan-500 focus:bg-gray-900 focus:ring-2 focus:ring-cyan-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm font-bold text-cyan-800 ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-cyan-500 focus:bg-gray-900 focus:ring-2 focus:ring-cyan-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm  text-cyan-800 font-bold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 bg-opacity-40 rounded border border-cyan-700 focus:border-cyan-500 focus:bg-gray-900 focus:ring-2 focus:ring-cyan-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="hover:ring-cyan-600 ring-2 flex mx-auto font-bold text-white bg-cyan-500 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-600 rounded text-lg">
            Submit
          </button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
          <a className="text-cyan-950">example@email.com</a>
          <p className="leading-normal my-5">
          
            <br />
         
          </p>
          <span className="inline-flex">
           
           
            
          </span>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Contact