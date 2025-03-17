// Home.js
import React from 'react';
import { Link } from 'react-router';

export default function Home() {
  return (
    <div>
      <div className="border-2 border-black m-8 p-8 min-h-[400px] flex flex-col justify-between">
        <div className="text-5xl font-bold text-center flex-grow flex items-center justify-center">
          Product
        </div>
        <div className="text-right">
          <Link to="/product" className="no-underline text-black font-medium">
            Learn More →
          </Link>
        </div>
      </div>
      <div className="text-left m-8">
        <Link to="/about" className="no-underline text-black font-medium">
          Meet the Team →
        </Link>
      </div>
    </div>
  );
}