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
            <div className="flex flex-col-5 mb-8  ">
              <label className="mb-2 uppercase font-bold text-lg text-grey-darkest md:ml-2">
                First Name:
              </label>

              <input
                type="text"
                className="bg-gray-200 shadow-inner rounded-l p-2 flex-1"
                id="email"
                aria-label="First Name:"
                placeholder="First Name:"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <div className="flex flex-col-5 mb-8  ">
              <label className="mb-2 uppercase font-bold text-lg text-grey-darkest md:ml-2">
                Last name:
              </label>

              <input
                type="text"
                className="bg-gray-200 shadow-inner rounded-l p-2 flex-1"
                id="email"
                aria-label="Last name"
                placeholder="Last name"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>

            <div className="flex flex-col mb-4  ">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest md:ml-2">
            email address:
              </label>
              <input
                type="text"
                className="bg-gray-200 shadow-inner rounded-l p-2 flex-1"
                id="email"
                aria-label="email address"
                placeholder="Enter your email address"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4 md:w-1/2">
              <button
                className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"
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