import React from 'react';
import ReactPlayer from 'react-player';
import { defaultMetaTags } from '../core/constants';
import {Navbar} from '../shared/components/navbar';
import Layout from '../shared/components/layout/layout.component';
import { Footer } from '../shared/components/footer';



export const TheReactPlayer = () => {
  return (
    <div  >
      <Navbar />
      <div className="  p-8 justify-center items-center h-screen-800 flex">
        <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      </div>
      <Footer />
    </div>
  );
};

export default TheReactPlayer;