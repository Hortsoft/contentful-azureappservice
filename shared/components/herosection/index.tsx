import React from 'react';
import Link from 'next/link';
 

  const HeroSection = () => (
      <div>
        <div className="max-w-screen-lg jumbotron shadow-2xl  text-white bg-gradient-to-r from-green-400 via-yellow-500 to-orange-700 py-12 mt-4">
            <h1 className="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">Jumbotron</h1>
            <div className="mt-8 flex justify-center">
                <p className="m-4">
                    What shallwe say. Gradient
                </p>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Learn more
                </button> 
            </div>
        </div>
        </div>
    
  );
   
  
  export default HeroSection;