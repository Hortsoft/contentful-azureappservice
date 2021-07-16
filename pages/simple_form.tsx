import React from 'react';
import { useState } from 'react';
import { defaultMetaTags } from '../core/constants';
import {Navbar} from '../shared/components/navbar';
import Layout from '../shared/components/layout/layout.component';
import { Footer } from '../shared/components/footer'; 

 

export const TheForm = () => {

    const [input, setInput] = useState("");

    const subscribe = async (e) => {
      e.preventDefault(); // prevents page reload
      alert(input);
    };

  return (
    <div>
      <Navbar />
      <div className="flex items-center h-screen w-full bg-teal-lighter">
        <div className="w-full bg-white rounded shadow-lg p-4 m-4 md:max-w-md md:mx-auto">
          <h1 className="block w-full text-center text-grey-darkest mb-6">
            Sign Up
          </h1>
          <form className="mb-6" action="">
          
<div className="relative flex w-full flex-wrap items-stretch mb-3">
  <input type="text" placeholder="Small Input" className="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative   bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
  <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  first: bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
    <i className="fas fa-user"></i>
  </span>
</div>
 
<div className="relative flex w-full flex-wrap items-stretch mb-3">
<input type="text" placeholder="Regular Input" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative  bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
  <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300   bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
    <i className="fas fa-user"></i>
  </span>  <label className="mb-2 uppercase font-bold text-lg text-grey-darkest md:ml-2">
                First Name:
              </label>
</div>
 
<div className="relative flex w-full flex-wrap items-stretch mb-3">
  <input type="text" placeholder="Large Input" className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative   bg-white rounded text-base border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
  <span className="z-10 h-full leading-normal font-normal absolute text-center text-blueGray-300   bg-transparent rounded text-lg items-center justify-center w-8 right-0 pr-3 py-4">
    <i className="fas fa-user"></i>
  </span>
</div> 
            <div className="flex flex-col mb-4 md:w-1/2">
              <button
                 className="text-blueGray-500 bg-transparent border border-solid border-blueGray-500 hover:bg-blueGray-500 hover:text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
                onClick={subscribe}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TheForm;