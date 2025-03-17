// AboutUs.js
import React from 'react';

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center mb-12 p-8 bg-[#4a4a4a] text-white">About Us</h1>
      
      <section className="mb-16 p-8 bg-[#4a4a4a] text-white">
        <h2 className="mb-6 text-2xl">Our Mission</h2>
        <div className="mb-8">
          <div className="h-4 bg-white mb-2"></div>
          <div className="h-4 bg-white mb-2"></div>
          <div className="h-4 bg-white mb-2"></div>
        </div>
      </section>
      
      <section className="mb-16 p-8 bg-[#4a4a4a] text-white">
        <h2 className="mb-6 text-2xl">Future Goals</h2>
        <div className="mb-8">
          <div className="h-4 bg-white mb-2"></div>
          <div className="h-4 bg-white mb-2"></div>
          <div className="h-4 bg-white mb-2"></div>
        </div>
      </section>
      
      <section className="mb-16 p-8 bg-[#4a4a4a] text-white">
        <h2 className="mb-6 text-2xl">Meet the Team</h2>
        
        {/* Founder */}
        <div className="flex gap-8 mb-16 md:flex-col">
          <div className="w-[200px] h-[200px] bg-white flex-shrink-0 md:w-[150px] md:h-[150px]"></div>
          <div className="flex-grow">
            <div className="h-8 bg-white mb-4"></div>
            <div className="h-8 bg-white mb-4"></div>
            <div className="h-8 bg-white mb-4"></div>
            <div className="h-8 bg-white mb-4"></div>
          </div>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-3 gap-8 mt-12 md:grid-cols-2 sm:grid-cols-1">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="mb-8">
              <div className="w-[100px] h-[100px] bg-white mb-4"></div>
              <div className="max-w-[200px]">
                <div className="h-4 bg-white mb-2"></div>
                <div className="h-4 bg-white mb-2"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}