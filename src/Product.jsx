// Product.js
import React from 'react';

export default function Product() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Large empty section */}
      <div className="h-[50vh] bg-white mb-8"></div>
      
      {/* More of Product Section */}
      <section className="p-8 bg-[#4a4a4a] text-white mb-8">
        <h2 className="mb-6 text-lg">More of Product</h2>
        <div className="max-w-[600px]">
          <div className="h-4 bg-white mb-2"></div>
          <div className="h-4 bg-white mb-2"></div>
          <div className="h-4 bg-white mb-2"></div>
          <div className="h-4 bg-white mb-2"></div>
        </div>
      </section>
      
      {/* See it in Action Section */}
      <section className="p-8 bg-[#4a4a4a] text-white mb-8 min-h-[40vh]">
        <h2 className="mb-6 text-lg">See it in Action</h2>
      </section>
    </div>
  );
}