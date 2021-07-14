import React from 'react';
import Link from 'next/link';
 

  const HeroSection = () => (
      <div>
        <div className="jumbotron text-white bg-gradient-to-r from-blue-800 via-red-500 to-orange-800">
            <h1 className="text-2xl md:text-4xl mb-3">Jumbotron</h1>
        <p className="mb-3">
            What shallwe say. Gradient
        </p>
        <button className="text-sm px-6 py-1 mt-4 text-white active:bg-yellow-500 focus:outline-none border-solid border">
        Learn more
        </button>
        </div>
        </div>
    
  );
   
  
  export default HeroSection;