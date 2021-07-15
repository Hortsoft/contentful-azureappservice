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
    <div className="flex-1 text-gray-700 text-center bg-gray-400 px-5 py-5 m-2 rounded">
      <div className="lg:flex lg:items-center">
        <div className="lg:flex-shrink-0">
          svg
        </div>
        <div className="mt-4 lg:mt-0 lg:ml-6">
          <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">{info.title} </div>
          <div className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">{info.description} </div>

          <Link href={getHref()} as={getNavigationLink(info.slug)}>
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Explore
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;