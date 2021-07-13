import React, { FunctionComponent } from 'react';
import Link from 'next/link';
 

  const HeroSection = () => (
    <Jumbotron className="text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <h1 className="text-2xl md:text-4xl mb-3">Jumbotron</h1>
      <p className="mb-3">
        What shallwe say. Gradient
      </p>
      
      <button className="text-sm px-6 py-1 mt-4 text-white active:bg-yellow-500 focus:outline-none border-solid border">
        Learn more
      </button>
    </Jumbotron>
  );
  function Jumbotron({ children, className }) {
    return (
      <div
        className={`${className} shadow-lg border font-light border-solid rounded-sm py-12 px-8 mb-8`}
      >
        {children}
      </div>
    );
  }
  
  export default HeroSection;