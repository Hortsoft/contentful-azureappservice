import React from 'react';
import { useState } from 'react';
import { defaultMetaTags } from '../core/constants';
import {Navbar} from '../shared/components/navbar';
import Layout from '../shared/components/layout/layout.component';
import { Footer } from '../shared/components/footer';
import JoditEditor from 'jodit-react';
 

 

export const TheForm = () => {

    const [input, setInput] = useState("");

    const subscribe = async (e) => {
      e.preventDefault(); // prevents page reload
      alert(input);
    };

  return (
    <div>
      <Navbar />
      <div className="p-8 justify-center items-center h-screen flex">
        <form className="flex" action="">
       <JoditEditor
       value="hi"
       />
          <input
            type="text"
            className="bg-gray-200 shadow-inner rounded-l p-2 flex-1"
            id="email" 
            aria-label="email address"
            placeholder="Enter your email address"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"
            type="submit"
            onClick={subscribe}
          >
            Sign Up
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default TheForm;