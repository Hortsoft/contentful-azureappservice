import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { getHref, getNavigationLink } from '../../helpers/helper';

import styles from './card.module.scss';

type Props = {
  info: {
    id: string;
    title: string;
    description: string;
    heroImage: string;
    publishedAt: Date;
    slug: string;
  };
};

const Card: FunctionComponent<Props> = ({ info }) => {
  const cardBGStyles = {
    backgroundImage: `url(${info.heroImage})`,
    background: `linear-gradient(45deg, rgba(18, 40, 76, 0.56), rgba(39, 173, 213, 0.56), rgba(79, 192, 176, 0.56)), url(${info.heroImage}) no-repeat`
  };

  return (
 
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="flex flex-row bg-white shadow-sm rounded p-4">
            <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
              svg 
          </div>
          <div className="flex flex-col flex-grow ml-4">
            <div className="text-sm text-gray-500">{info.title} </div>
            <div className="font-bold text-lg">{info.description}  </div>
            
           
            
                <Link href={getHref()} as={getNavigationLink(info.slug)}>
                  <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Explore</a>
                </Link>
              </div>
            </div>
          </div>
   
  );
};

export default Card;