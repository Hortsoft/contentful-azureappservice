import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import heroPic from '/public/images/drawers.jpg'
 

  const HeroSection = () => (
    <div>
      <div className=" flex    jumbotron shadow-2xl  text-white bg-gradient-to-r  from-sbtBlue   to-sbtOrange p-12 mt-4 text-left">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10 justify-center">
              Jumbotron
            </h1>
          </div>
          <div>What shall we say. Gradient</div>
          <div>
            <button
              className=" text-sbtOrange bg-sbtBlue border border-solid border-sbtOrange hover:bg-sbtOrange hover:text-white active:bg-sbtOrange font-normal w-40  text-xl px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1   ease-linear transition-all duration-150"
              type="button"
            >
              Learn more
            </button>
          </div>
        </div>
        <div className="ml-auto w-12">
        <Image src={heroPic} alt="blue door" className="float-right" />
      </div>
      </div>
      
    </div>
  );
   
  
  export default HeroSection;