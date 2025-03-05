import React from 'react'

function Heroflow() {
  return (
    <div>
    <div className="mt-10 w-full overflow-hidden relative">
    <div className="flex space-between gap-8 animate-marquee whitespace-nowrap">
      {/* Original Cards */}
      <div className="w-70 h-40 bg-white shadow-lg  rounded-lg flex items-center justify-center">
        <img src="https://via.placeholder.com/100" alt="Card" className="rounded-lg" />
      </div>
      <div className="w-70 h-40 bg-white shadow-lg rounded-lg flex items-center justify-center">
        <img src="https://via.placeholder.com/100" alt="Card" className="rounded-lg" />
      </div>
      <div className="w-70 h-40 bg-white shadow-lg rounded-lg flex items-center justify-center">
        <img src="https://via.placeholder.com/100" alt="Card" className="rounded-lg" />
      </div>
      <div className="w-70 h-40 bg-white shadow-lg rounded-lg flex items-center justify-center">
        <img src="https://via.placeholder.com/100" alt="Card" className="rounded-lg" />
      </div>
      <div className="w-70 h-40 bg-white shadow-lg rounded-lg flex items-center justify-center">
        <img src="https://via.placeholder.com/100" alt="Card" className="rounded-lg" />
      </div>

     
      
     
    </div>
  </div>

<style>
      {`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 10s linear infinite;
        }
      `}
    </style>
    </div>
     
  )
}

export default Heroflow