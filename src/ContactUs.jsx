// ContactUs.js
import React from 'react';

export default function ContactUs() {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="p-8 bg-[#4a4a4a] text-white min-h-screen md:p-4">
        <h1 className="mb-12">Contact Us</h1>
        
        {/* Email/Contact form placeholder */}
        <div className="mb-12">
          <div className="h-4 bg-white mb-2"></div>
        </div>
        
        {/* Q&A Section */}
        <div className="bg-white text-black p-12 my-12 min-h-[200px] flex justify-center items-center md:p-8">
          <h2 className="text-4xl">Q n A</h2>
        </div>
        
        {/* Socials Section */}
        <div className="mt-12">
          <h2 className="mb-6">Socials</h2>
          <div className="max-w-[400px]">
            <div className="h-4 bg-white mb-2"></div>
            <div className="h-4 bg-white mb-2"></div>
            <div className="h-4 bg-white mb-2"></div>
            <div className="h-4 bg-white mb-2"></div>
            <div className="h-4 bg-white mb-2"></div>
            <div className="h-4 bg-white mb-2"></div>
          </div>
        </div>
      </section>
    </div>
  );
}