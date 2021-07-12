import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { getHref, getNavigationLink } from '../../helpers/helper';

export const Navbar = () => {
    return (
      <>
        <div className="bg-gray-100 font-sans w-full min-height : 200px m-0">
	<div className="bg-orange-400 shadow">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between py-4">
        <div>
         
        </div>

        <div className="hidden sm:flex sm:items-center">
          <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Program</a>
          <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Community</a>
          <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Partnerships</a>
          <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600">Pricing</a>
        </div>

        <div className="hidden sm:flex sm:items-center">
          <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Sign in</a>
          <a href="#" className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600">Sign up</a>
        </div>

        <div className="sm:hidden cursor-pointer">
        
        </div>
      </div>
      
      <div className="block sm:hidden bg-white border-t-2 py-2">
        <div className="flex flex-col">
          <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">Products</a>
          <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">Marketplace</a>
          <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">Partners</a>
          <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">Pricing</a>
          <div className="flex justify-between items-center border-t-2 pt-2">
            <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Sign in</a>
            <a href="#" className="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-purple-600 hover:border-purple-600">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </>
    );
  };