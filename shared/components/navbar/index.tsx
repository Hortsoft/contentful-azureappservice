import React, {useState, FunctionComponent } from 'react';
import Link from 'next/link';
import { getHref, getNavigationLink } from '../../helpers/helper';

import './navbar.module.scss';
export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
    return (
      <>
         <nav className='flex items-center flex-wrap bg-White p-3 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <svg
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className='fill-current text-white h-8 w-8 mr-2'
            >
              <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
            </svg>
            <span className='text-xl text-white font-bold uppercase tracking-wide'>
              TRAFFIC LIGHTS
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
          <Link href="/">
              <a  className="text-sbtBlue border-b-4 border-transparent hover:border-sbtOrange hover:text-sbtOrange px-3 py-2 text-xl font-medium  ">Home</a>
             </Link>
          
            <Link href='/simple_form'>
            <a  className="text-sbtBlue border-transparent border-b-4 hover:border-sbtOrange hover:text-sbtOrange px-3 py-2 text-xl font-medium  ">
                Simple  form
              </a>
            </Link>
            <Link href='/react_player'>
                <a  className="text-sbtBlue border-transparent border-b-4 hover:border-sbtOrange hover:text-sbtOrange px-3 py-2 text-xl font-medium  ">
                React Player
              </a>
            </Link>
            <Link href='/'>
            <a  className="text-sbtBlue border-transparent border-b-4 hover:border-sbtOrange hover:text-sbtOrange px-3 py-2 text-xl font-medium  ">
                Contact us
              </a>
            </Link>
            <Link href='https://canvas.instructure.com/login/canvas' >
            <a  className="text-sbtBlue border-transparent border-b-4 hover:border-sbtOrange hover:text-sbtOrange px-3 py-2 text-xl font-medium  ">
                Canvas Login
              </a>
            </Link>
          
          </div>
          <div className="relative group">
      <button className="flex flex-row lg:w-auto  px-3 py-2 rounded  items-center justify-center   text-sbtBlue border-transparent border-b-4 hover:border-sbtOrange hover:text-sbtOrange px-3 py-2 text-xl font-medium  md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none" >
        <span> dropdown</span>
              
      </button>
      <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
          
          <div className="px-2 pt-2 pb-4 bg-white  shadow-lg">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <p>
                dropdown content here
              </p>
            </div>
          </div>
      </div>
  </div>  
  
  <div className="relative group">
      <button className="flex flex-row lg:w-auto w-full px-3 py-2 rounded   items-center justify-center  text-sbtBlue border-transparent border-b-4 hover:border-sbtOrange hover:text-sbtOrange px-3 py-2 text-xl font-medium  md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none">
          <span>Second Dropdown</span>
      </button>
      <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
          
          <div className="px-2 pt-2 pb-4 bg-white  shadow-lg">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <p>
                dropdown content here
              </p>
            </div>
          </div>
      </div>
  </div>  
        </div>
      </nav>
    </>
  );
};