import React from 'react'

function About() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gray-100 py-12 overflow-hidden">
    {/* Left Background Image */}
    <div
      className="absolute left-0 top-0 w-full md:w-1/3 h-full bg-cover bg-center"
      style={{ backgroundImage: "url('/left-bg-image.jpg')" }}
    ></div>

    {/* Right Background Image */}
    <div
      className="absolute right-0 top-0 w-full md:w-1/3 h-full bg-cover bg-center"
      style={{ backgroundImage: "url('/right-bg-image.jpg')" }}
    ></div>

    {/* Centered Content */}
    <div className="relative z-10 container mx-auto px-4">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Us</h2>

      {/* Card with Details */}
      <div className="max-w-full md:max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
        <p className="text-gray-700 text-base md:text-lg">
        Welcome to EduFlow Connect – Your Gateway to Education and Innovation! EduFlow Connect is a dual-platform ecosystem designed to empower learners and developers alike. With EduConnect, explore colleges, courses, and career pathways in detail, providing the tools and insights to make informed decisions about your academic and professional future. Meanwhile, DevFlow is a thriving developer community where innovation meets collaboration, enabling you to connect with like-minded individuals, share knowledge, and work on cutting-edge projects. Together, EduConnect and DevFlow create a seamless bridge between education and innovation, helping you learn, grow, and build the future. 
        Join us today and take the next step in your journey!
        </p>
        
      </div>
    </div>
  </section>
  )
}

export default About