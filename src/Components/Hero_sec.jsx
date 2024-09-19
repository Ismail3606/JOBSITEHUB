import React from 'react';

const Hero_sec = () => {
    return (
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between  lg:px-24  bg-white  lg:space-y-0 lg:space-x-12 h-screen">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6 ">
          <h1 className="text-3xl md:text-5xl font-bold text-black space-3 ">
            One Step <br/> <span className='space-3'>Closer To Your </span><br/><span className="text-purple-500 space-3">Dream Job</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Explore thousands of job opportunities with all the<br/>information you need. It’s your future. Come find it. Manage all<br/> your job applications from start to finish.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-600">
              Get Started
            </button>
          </div>
        </div>
  
    
        <div className="lg:w-1/2 flex justify-center lg:justify-center">
          <img
            src="https://i.ibb.co.com/rm4gwZ9/P3-OLGJ1-copy-1.png"
            alt="Person"
            className="w-full flex justify-center h-94 md:w-80 md:h-80 object-cover rounded-lg shadow-lg "
          />
        </div>
      </section>
    );
  };
export default Hero_sec;